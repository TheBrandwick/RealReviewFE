import { useEffect, useState } from 'react'
import Web3 from 'web3'
import abi from '../contract/abi.json'
import { Contract, ethers } from  "ethers";


const CONTRACT_ADDRESS = "0xe580491c534e9ee73E05BA18749A70C16C9414c4"

export default function useWallet(accountAddress) {
    const [account, setaccount] = useState(null)
    const [surveyState, setSurveyState] = useState(null)
    const [surveys, setSurveys] = useState([])

    useEffect(() => {
        if(!accountAddress){ return; }
        loadBlockchainData()
    }, [accountAddress])

    const web3 = new Web3(Web3.givenProvider || process.env.GOERLI_RPC_URL)

    const loadBlockchainData = async () => {
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
    const createSurvey = async (surveyState=surveyState) => {
        const surveyCreate = await surveyState.methods.createSurvey(10,10,10,false,true,"ipfs://uyegdjhdebjhbd")
        .send({
            from: '0xbf443ed3b73159d5bf427568359c7de4103413c3', 
        value: web3.utils.toBN(100)
     });
    }
    return {
        loadBlockchainData,
        createSurvey
    }
}