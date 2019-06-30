import React from 'react';
import { connect} from 'react-redux';

function App() {
    const { books } = this.props.books;
  return (

    <div>
        <h1>{books[0].title}</h1>
    </div>
  );
}

// class App extends Comment{
//     render(){
//         console.log(this.props);
//         return (
//             <div>
//                 <h1>1111</h1>
//             </div>
//         );
//     }
// }


const mapState = state =>({
    ...state
});

export default connect(mapState)(App);
