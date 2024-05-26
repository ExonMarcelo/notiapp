import apiFactos, { setAPIToken } from "@/app/lib/apiFactos";
import { useEffect, useState } from "react";

export default function useNews(){

    const [listPosts, setListPosts] = useState<any[]>([])
    const [isLoadingPosts, setIsLoadingPosts] = useState<boolean>(false)

    useEffect(()=>{
        login()
    }, [])

    const login = () => {

        const apiToken = localStorage.getItem("apiToken")

        if(apiToken){
            setAPIToken(apiToken || "")
            getPosts()
            return;
        }

        const loginData = {
            email: 'exonmarcelo05@hotmail.com',
            password: 'exon0505',
          };
          
          apiFactos.post('/users/login', loginData)
            .then((response) => {
            //   console.log(JSON.stringify(response.data));
            console.log(response.data)
            localStorage.setItem("apiToken", response.data?.data?.token?.token)
            setAPIToken(response.data?.data?.token?.token || "")
            getPosts()
            })
            .catch((error) => {
              console.log(error);
            });
    }

    const getPosts = ()  => {
        setIsLoadingPosts(true)
        apiFactos.get('/news?page=1&limit=5&searchTerm=')
            .then((response) => {
            //   console.log(JSON.stringify(response.data));
            console.log(response.data)
            setListPosts(response?.data?.data.items)
            })
            .catch((error) => {
              console.log(error);
            })
            .finally(()=>{
                setIsLoadingPosts(false)
            })
    }

    return{
        listPosts, isLoadingPosts
    }
}