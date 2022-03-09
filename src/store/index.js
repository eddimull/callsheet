import {createStore} from 'vuex';
import router from '../router';
import {auth} from '../firebase';
import players from './modules/players';
import concerts from './modules/concerts';
import {

  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';

export default createStore({
  state: {
    user: null,
    intendedRoute: '/',
    database: null,
  },
  getters: {
    user(state) {
      return state.user;
    },
    db(state) {
      return state.database;
    },
  },
  mutations: {

    SET_USER(state, user) {
      state.user = user;
    },

    CLEAR_USER(state) {
      state.user = null;
    },

    SET_ROUTE(state, route) {
      state.intendedRoute = route;
    },
    SET_DB(state, database) {
      state.database = database;
    },
  },
  modules: {
    players,
    concerts,
  },
  actions: {
    setDatabase({commit}, database) {
      console.log('setting db');
      commit('SET_DB', database);
    },
    setRoute({commit}, route) {
      commit('SET_ROUTE', route);
    },
    async login({commit}, details) {
      const {email, password} = details;

      try {
        await signInWithEmailAndPassword(auth, email, password);
      } catch (error) {
        switch (error.code) {
          case 'auth/user-not-found':
            alert('User not found');
            break;
          case 'auth/wrong-password':
            alert('Wrong password');
            break;
          default:
            alert('Something went wrong');
        }

        return;
      }

      commit('SET_USER', auth.currentUser);

      router.push('/');
    },

    async register({commit}, details) {
      const {email, password} = details;

      try {
        await createUserWithEmailAndPassword(auth, email, password);
      } catch (error) {
        switch (error.code) {
          case 'auth/email-already-in-use':
            alert('Email already in use');
            break;
          case 'auth/invalid-email':
            alert('Invalid email');
            break;
          case 'auth/operation-not-allowed':
            alert('Operation not allowed');
            break;
          case 'auth/weak-password':
            alert('Weak password');
            break;
          default:
            alert('Something went wrong');
        }

        return;
      }

      commit('SET_USER', auth.currentUser);

      router.push('/');
    },

    async logout({commit}) {
      await signOut(auth);

      commit('CLEAR_USER');

      router.push('/login');
    },

    fetchUser({commit}) {
      auth.onAuthStateChanged(async (user) => {
        if (user === null) {
          commit('CLEAR_USER');
        } else {
          commit('SET_USER', user);
          if (router.isReady() && router.currentRoute.value.path === '/login') {
            router.push('/dashboard');
          }
        }
      });
    },

  },
});
