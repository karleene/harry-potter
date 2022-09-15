
const HouseInfo = (props) => {
    console.log(props.names.data);

    return(
        <ul>
            {props.names.data?.map( (name) => {
                return(
                    <li>
                        <p>{name.name}</p>
                        <p>{name.species}</p>
                        <img src={name.image} alt={name.name} />
                    </li>
                    
                )

            })}
        </ul>
    )

}

export default HouseInfo;
