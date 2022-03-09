import {fb} from '../../firebase';
import {getDocs, doc, setDoc, addDoc, collection} from 'firebase/firestore';
const concerts = {
  state: {
    concerts: [],
  },
  getters: {
    concertEvents(state) {
      return state.concerts;
    },
  },
  mutations: {
    async FETCH_CONCERTS(state) {
      const concertCollection = collection(this.state.database, 'users', this.state.user.uid, 'concerts');
      const snapshot = await getDocs(concertCollection);
      //   console.log(snapshot);
      const concertList = [];
      snapshot.forEach((concert)=>{
        concertList.push({id: concert.id, data: concert.data()});
      });
      state.concerts = concertList;
    //   state.concerts = snapshot.map((concert)=>{
    //     const obj = {...concert.data(), id: concert.id};
    //     return obj;
    //   });
    },
    async ADD_CONCERT(state, payload) {
      const concertCollection = collection(this.state.database, 'users', this.state.user.uid, 'concerts');
      await addDoc(concertCollection, {
        name: 'test',
        date: 'eventually',
        location: 'new iberia',
      });
    //   await setDoc(doc(this.state.database, 'cities', 'LA2'), {
    //     name: 'Los Angeles',
    //     state: 'CA',
    //     country: 'USA',
    //   });
    },

  },
  actions: {
    addConcert({commit}, payload) {
      commit('ADD_CONCERT', payload);
    },
    fetchConcerts({commit}) {
      commit('FETCH_CONCERTS');
    },
  },
};
export default concerts;

