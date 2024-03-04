function List(){
    const fruits = [{name : "apple",calories : 100},
                    {name : "banana" ,calories : 200},
                    {name : "orange",calories : 150},];

    const listItems = fruits.map(fruit => <li>{fruit}</li>);

    return(<ol>{listItems}</ol>);
};

export default List;