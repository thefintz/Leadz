const dummyData = fetch(
  "https://fintz.herokuapp.com/api/estabelecimentos?negociadaB3=true&cnae=6203100")
  .then((res) => res.json())
  .then((json) => {
    return json
  })


export default dummyData