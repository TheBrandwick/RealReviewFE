import { useEffect, useState } from 'react'
import Web3 from 'web3'
import abi from '../contract/abi.json'


const CONTRACT_ADDRESS = "0xe580491c534e9ee73E05BA18749A70C16C9414c4"

export default function useWallet(accountAddress) {
    const [account, setaccount] = useState(null)
    const [surveyState, setSurveyState] = useState(null)
    const [surveys, setSurveys] = useState([])
    useEffect(() => {
        if(!accountAddress){ return; }
        loadBlockchainData()
    }, [accountAddress])

    const loadBlockchainData = async () => {
        const web3 = new Web3(Web3.givenProvider || process.env.GOERLI_RPC_URL)
        const accounts = await web3.eth.getAccounts()
        console.log({ web3 })
        console.log({ accounts })
        setaccount(accounts[0])

        const surveyState = new web3.eth.Contract(abi, CONTRACT_ADDRESS)
        surveyState.options.address = CONTRACT_ADDRESS;
        setSurveyState(surveyState)
        console.log({ surveyState })
        const surveyList = await surveyState.methods.getSurveys().call()
        setSurveys(surveyList)
        console.log({ surveyList })

    }

    return {
        loadBlockchainData,
    }
}