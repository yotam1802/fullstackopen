const Filter = ({filterValue, handleFilterInput}) => {
    return <div>filter shown with <input value={filterValue} onChange={handleFilterInput}/></div>
}

export default Filter