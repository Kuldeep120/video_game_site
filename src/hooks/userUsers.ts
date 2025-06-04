import { useEffect, useState } from "react";
import userService,  { type User }from "../services/userService";
import { CanceledError } from "../services/apiClient";

const useUser = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        const { request, cancel } = userService.getAll<User>();
        request
            .then((res) => {
                console.log(res.data);
                setUsers(res.data);
                setIsLoading(false);
            })
            .catch((err) => {
                console.log(err);
                if (err instanceof CanceledError) return;
                setError(err.message);
                setIsLoading(false);
            });
        return cancel;
    }, []);

    return { users, error, isLoading, setUsers, setError }
}

export default useUser