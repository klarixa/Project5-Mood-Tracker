<script>
    import { onMount } from 'svelte';
  import authStore from '../stores/authStore';
  import { goto } from '$app/navigation';
  import { collection, addDoc, getDocs, query, where, orderBy } from 'firebase/firestore';
    let auth;
    let db;
    let firebaseReady = false;

    let moodScale = 5;
  let moodEntries = [];
  let loading = false;

    $: if (!$authStore.isLoggedIn && $authStore.firebaseControlled) {
    goto('/login');
  }

    $: if (firebaseReady && $authStore.user?.uid) {
            getMoodEntries();
    }

  async function logout() {
    try {
            if (auth) {
                const { signOut: signOutFn } = await import('firebase/auth');
                await signOutFn(auth);
            }
      authStore.set({
          isLoggedIn: false,
          firebaseControlled: false,
          user: null
      });
    } catch (err) {
      console.error(err);
    }
  }

  async function addMoodEntry() {
      const user = $authStore.user;
      if (!user) return;
      if (!db) return;
      loading = true;
      const currentDate = new Date();

      try {
          await addDoc(collection(db, 'moods'), {
              userId: user.uid,
              mood: moodScale,
              date: currentDate.toISOString(),
              timestamp: currentDate
          });
          
          await getMoodEntries();
          moodScale = 5;
      } catch (error) {
          console.error("Error adding mood entry:", error);
      } finally {
        loading = false;
      }
  }

  async function getMoodEntries() {
      const user = $authStore.user;
      if (!user) return;
      if (!db) return;
      
      try {
          const q = query(
              collection(db, 'moods'),
              where('userId', '==', user.uid),
              orderBy('timestamp', 'desc')
          );
          
          const querySnapshot = await getDocs(q);
          console.log('getMoodEntries: querySnapshot size=', querySnapshot.size);
          querySnapshot.docs.forEach(d => console.log('doc', d.id, d.data()));
          moodEntries = querySnapshot.docs.map(doc => {
              const data = doc.data();
              const ts = data.timestamp;
              let dateStr = 'Unknown';

              if (ts && typeof ts.toDate === 'function') {
                  dateStr = ts.toDate().toLocaleDateString();
              } else if (typeof ts === 'string') {
                  dateStr = new Date(ts).toLocaleDateString();
              } else if (data.date) {
                  dateStr = new Date(data.date).toLocaleDateString();
              }

              return {
                  id: doc.id,
                  ...data,
                  date: dateStr
              };
          });
      } catch (error) {
          console.error("Error getting mood entries:", error);
      }
  }

    onMount(async () => {
        const mod = await import('../firebase');
        auth = mod.auth;
        db = mod.db;
        firebaseReady = true;
    });
</script>

<main class="container mt-4">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">
                    <h2 class="text-center">Mood Tracker</h2>
                </div>
                <div class="smallcard card-body">
                    <div class="mb-4">
                        <h4>How are you feeling today?</h4>
                        <div class="mood-scale">
                            <label for="moodRange" class="form-label">
                                Mood Scale: {moodScale}/10
                            </label>
                            <input 
                                type="range" 
                                class="form-range" 
                                min="1" 
                                max="10" 
                                bind:value={moodScale}
                                id="moodRange"
                            />
                            <div class="d-flex justify-content-between">
                                <small>😭 Very Sad</small>
                                <small>😐 Neutral</small>
                                <small>😊 Very Happy</small>
                            </div>
                        </div>
                        <button 
                            type="button" 
                            class="btn btn-primary mt-3" 
                            on:click={addMoodEntry}
                            disabled={loading}
                        >
                            {loading ? 'Saving...' : 'Save Mood'}
                        </button>
                    </div>

                    <div class="mood-history">
                        <h4>Your Mood History</h4>
                        {#if moodEntries.length > 0}
                            <div class="mood-entries">
                                {#each moodEntries as entry (entry.id)}
                                    <div class="mood-entry">
                                        <div class="mood-date">{entry.date}</div>
                                        <div class="mood-value">
                                            <span class="mood-number">{entry.mood}/10</span>
                                            <span class="mood-emoji">
                                                {#if entry.mood <= 3}😟
                                                {:else if entry.mood <= 6}😑
                                                {:else}😁
                                                {/if}
                                            </span>
                                        </div>
                                    </div>
                                {/each}
                            </div>
                        {:else}
                            <p class="text-muted">No mood entries yet. Add your first mood above!</p>
                        {/if}
                    </div>
                    <section class="container px-4 py-3 text-center">
                        <button type="button" class="btn btn-danger" on:click={logout}>Logout</button>
                    </section>
                </div>
            </div>
            
        </div>
    </div>
</main>

<style>
    .smallcard{
        background-color: #d6ebffff;
    }
    
    .mood-scale {
        padding: 20px;
        background-color: #f8f9fa;
        border-radius: 10px;
        margin: 20px 0;
    }
    
    .mood-entries {
        max-height: 400px;
        overflow-y: auto;
    }
    
    .mood-entry {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 15px;
        margin: 10px 0;
        background-color: #f8f9fa;
        border-radius: 8px;
        border-left: 4px solid #007bff;
    }
    
    .mood-date {
        font-weight: bold;
        color: #495057;
    }
    
    .mood-value {
        display: flex;
        align-items: center;
        gap: 10px;
    }
    
    .mood-number {
        font-weight: bold;
        color: #007bff;
    }
    
    .mood-emoji {
        font-size: 1.5em;
    }
    
    .form-range {
        margin: 15px 0;
    }
</style>