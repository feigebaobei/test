import {useState} from 'react'
function useFilter () {
    let [_filter, _setFilter] = useState({key: {}})
    let getFilter = (k) => {
        return _filter.key[k]
    }
    let setFilter = (k, v) => {
        let d = _filter.key
        d[k] = v
        _setFilter({
            key: d
        })
    }
    return {getFilter, setFilter}
}
export default useFilter