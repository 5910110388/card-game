import CharacterCard from "./CharacterCard";

export default class WordCard extends
Component {
    render(){
        return(
            <div>
                {Array.from(this.props.value).map((caches, i) => <CharacterCard value={c} key={i}/>)}
            </div>
        );
    }
}