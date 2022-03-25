import{ useEffect, useState } from "react";

function App() {
const [windowWidth, setWindowWidth]= useState(window.innerWidth);
const[name, setname]= useState("");

const [product, setProduct] = useState()





useEffect(() => {
    observable.subscribe()
    return () => {
        observable.unsubscribe()
        setProduct(null)
    }
}, [product])

//On every render
useEffect(() => {
    console.log("i render ");
});

//On a first mount only
useEffect(() => {
    console.log("Component mounted")
}, []);

//no primeiro render + quando a dependencia nao muda!
useEffect(()=> {
    console.log(`O nome mudou: ${name}`);
}, [name]);

//return()=>{
    // Cleanup...
//    console.log("We unmonted");
//};


//Segue as mesmas regras, a nao ser quando isso lida com a quantidade dos componentes
useEffect(() =>{
    window.addEventListener("resize", updateWindowWidth);
    },[] );

const updateWindowWidth= () =>{
    setWindowWidth(window.innerWidth);
};

return (
    <div className="=app">
     
        <h1>The Effect use Hook</h1>
        <h2>The window width is:{windowWidth}</h2>
    
    <input value={name}
    onChange={(e)=>setname(e.target.value)}
    placeholder="Enter a name " />
    
     
    </div>
    );
 //   useEffect(() => {
//        const subscription = props.source.subscribe();
//       return () => {
//          // Limpa a assinatura antes do componente deixar a tela
//          subscription.unsubscribe();
//        };
//   });

const fetchUsers = async () => {
    const data = await fetch('http://makeup-api.herokuapp.com/api/v1/products.json')
    setProduct(data)
}

//useEffect(
//    () => {
//      const subscription = props.source.subscribe();
//      return () => {
//        subscription.unsubscribe();
//      };
//    },
//    [props.source],
//  );  
//Agora, a assinatura só será recriada quando props.source for alterado.
}
export default App
