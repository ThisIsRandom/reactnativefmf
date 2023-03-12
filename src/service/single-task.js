import { useQuery } from '@tanstack/react-query'

import { useHttpProvider } from "../providers/http"

const useSingleTasks = (id) => {
    const client = useHttpProvider()

    const query = useQuery({
        queryKey: ["task", id],
        queryFn: () => {
            return client.get("/task/" + id)
                .then(({ data }) => data)
        }
    })

    return {
        query
    }
}

export default useSingleTasks;