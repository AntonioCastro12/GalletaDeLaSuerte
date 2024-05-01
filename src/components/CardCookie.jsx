const FortuneCookie = ({data}) => {

    return (
        <section className="phrase_card">
            <p>{data.phrase}</p>
            <span>Autor: {data.author}</span>
        </section>
)
}
export default FortuneCookie