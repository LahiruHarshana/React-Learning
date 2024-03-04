function List(){
    const fruits = [{name : "apple",calories : 100},
                    {name : "banana" ,calories : 200},
                    {name : "orange",calories : 150},
                    {name : "mango",calories : 300},
                    {name : "grapes",calories : 50}];

    const listItems = fruits.map(fruit => <li>{fruit.name}</li>);

    return(<ol>{listItems}</ol>);
};

export default List;