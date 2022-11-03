import Filter from "./Filter";

const AllCategories = () => {
    return (
        <div>
            <h1>What kind of food do you like?</h1>
            <h2> {['SEAFOOD', 'ITALIAN', 'APPETIZERS','SALADS', 'ALL'].map(category => <Filter category={category} />)
            } </h2>
            
        </div>
    )
}
export default AllCategories;
