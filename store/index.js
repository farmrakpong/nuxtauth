export const state = () => ({
        auth: {}
  });

//   export const mutations = () => ({
//         settoke(state , value){
//                     console.log("asd");
//         }
//   })

  export const mutations = {
    settoke(state , value) {
        // console.log(value);
        state.auth = value
        // console.log(state.auth);
    //   state.counter++
    }
  }