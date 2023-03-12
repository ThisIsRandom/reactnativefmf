import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'

import { useHttpProvider } from "../providers/http";

const useAdvertisements = () => {
    const client = useHttpProvider();
    const queryClient = useQueryClient()

    const query = useQuery({
        queryKey: ["advertisements"],
        queryFn: () => {
            return client.get("/advertisement")
                .then(({ data }) => data)
        }
    })

    const mutation = useMutation({
        mutationFn: advertisement => {
            return client.post("/advertisement", advertisement)
                .then(res => res.data)
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["advertisements"] })
        }
    })

    return {
        query,
        mutation
    }
}

export default useAdvertisements