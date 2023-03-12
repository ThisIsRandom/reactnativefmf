import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'

import { useHttpProvider } from "../providers/http"

const useTasks = () => {
    const client = useHttpProvider()
    const queryClient = useQueryClient()

    const query = useQuery({
        queryKey: ["tasks"],
        queryFn: () => {
            return client.get("/task")
                .then(({ data }) => data)
        }
    })

    const mutation = useMutation({
        mutationFn: task => {
            return client.post("/task", task)
                .then(res => res)
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["tasks"] })
        }
    })

    const messageMutation = useMutation({
        mutationFn: ({ message, id }) => {
            return client.post("/task/message", { message: { text: message }, taskId: id })
        }
    })

    return {
        query,
        mutation,
        messageMutation
    }
}

export default useTasks;