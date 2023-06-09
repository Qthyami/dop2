import React, {ChangeEvent, RefObject} from 'react';
type PropsType={
    title: RefObject<HTMLInputElement>
    //setTitle:(title:string)=>void
}
export const Input = (props:PropsType) => {
   //const  onChangeHandler=(event: ChangeEvent<HTMLInputElement>)=>{
       // props.setTitle(event.currentTarget.value)
   // }
    return (
        <input ref={props.title}

        />

    );
};