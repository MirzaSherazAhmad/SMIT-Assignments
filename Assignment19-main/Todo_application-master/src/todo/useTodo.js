


import React, { useState } from 'react';





function useTodo() {



    const [addList, setAddList] = useState([]);
    const [add, setAdd] = useState();


    const addData = () => {


        if (add.length !== 0) {
            var copyData = addList;
            copyData.push(add);
            setAddList(copyData);
            console.log(addList); setAdd('');
            alert("Item add sucessful");

        }
        else {
            alert("please item add Not empty")
        }
    };
    const  deleteData = (index) => {


        var newAddList = addList;
        newAddList.splice(index, 1);
        setAddList([...newAddList]);
        alert("delete item successful")
    };













    return (
        {
            addList, add, setAddList, setAdd, deleteData,addData
        }
    )
}

export default useTodo;