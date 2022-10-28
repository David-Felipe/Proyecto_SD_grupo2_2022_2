import * as React from "react";
import * as ReactDOM from "react-dom/client";

import FirstComponent from './components/FirstComponent';
import UserComponent from './components/UserComponent';
import { AvlBst } from './DataStructures/AvlBst';


const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(

    <div>
        <h1>Hello, Welcome to React and TypeScript</h1>
        <FirstComponent />
        <UserComponent name="John Doe" age={26} address="87 Summer St, Boston, MA 02110" dob={new Date()} />
    </div>,

);

const testAvl: AvlBst<number> = new AvlBst<number>(9, 9);
const test = [4, 13, 2, 7, 11, 16, 1, 3, 5, 8, 10, 12, 15, 17, 6, 14];


for (let i = 0; i < 14; i++) {

    testAvl.insert(test[i], test[i]);
    console.log(testAvl.getNumElements());

}

testAvl.delete(9);
console.log(testAvl.getNumElements());