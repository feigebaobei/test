import useFilter from "./useFilter"
import useParams from "./useParams"

export default function useHooks () {
    let filter = useFilter()
    let params = useParams()
    return {
        ...filter,
        ...params
    }
}