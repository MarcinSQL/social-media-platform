export default function Input(props){
    return <label>{props.title}
        <input type={props.type} name={props.name} />
    </label>
}