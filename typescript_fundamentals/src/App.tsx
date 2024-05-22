import "./App.css";
import ColorList from "./components/ColorList";
import UserList from "./components/UserList";

function App() {
    let greeting: string = "Hello, TypeScript!";

    let numberList: number[] = [5, 10, 15];

    let calculateSum = (a: number, b: number): number => {
        return a + b;
    };

    return (
        <div>
            <h1>{greeting}</h1>
            <p>
                {numberList.map((num) => {
                    return num + " ";
                })}
            </p>
            <p>{calculateSum(5, 10)}</p>
            <ColorList />
            <UserList />
        </div>
    );
}

export default App;
