<script>
  import { onMount } from 'svelte';
  import { goto } from '$app/navigation';
  import authStore from '../stores/authStore';

  let email = "";
  let password = "";
  let errorMessage = "";
  let loading = false;
  let auth;

  $: if ($authStore.isLoggedIn) {
    goto('/');
  }

  async function login() {
    loading = true;
    errorMessage = "";
     try { 
       const { signInWithEmailAndPassword } = await import('firebase/auth');
       await signInWithEmailAndPassword(auth, email, password);
     } catch (error) {
       console.error(error);
       errorMessage = error.message;
   } finally {
       loading = false;
   }
  }

  onMount(async () => {
    const mod = await import('../firebase');
    auth = mod.auth;
  });
</script>

<div class="card mt-5 m-auto text-center maincard" style="width: 24em; background-color: #fffbcb;">
    <div class="card-body">
        <h5 class="card-title">Welcome Back!</h5>
        <p class="card-text text-muted">Please log-in to continue.</p>

        {#if errorMessage}
            <div class="alert alert-danger" role="alert">
                {errorMessage}
            </div>
        {/if}

        <form class="form-floating" on:submit|preventDefault={login}>
            <div class="mb-3">
                <label for="emailInput" class="form-label">Email address:</label>
                <input bind:value={email} type="email" class="form-control" id="emailInput" required />
            </div>
            <div class="mb-3">
                <label for="passwordInput" class="form-label">Password:</label>
                <input
                    bind:value={password}
                    type="password"
                    class="form-control"
                    id="passwordInput"
                    aria-describedby="passwordHelp"
                    required
                    minlength="6"
                />
            </div>
            <div id="passwordHelp" class="form-text">
                Your password must be at least 6 characters long.
            </div>
            <button type="submit" class="btn btn-dark mt-3" disabled={loading}>
                {loading ? 'Logging in...' : 'Login'}
            </button>
        </form>
    </div>
</div>

<div class="text-center mt-3">
    <a href="/signup" class="text-muted">First time? Click here to register for an account.</a>
</div>

<style>
    .maincard {
        background-color: #fffbcb;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
        transition: 0.3s;
    }
</style>