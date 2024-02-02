import { useAccount, useConnect } from 'wagmi'
import { InjectedConnector } from 'wagmi/connectors/injected'

export default function Home() {
  const { address, isConnected } = useAccount()
  const { connect } = useConnect({
    connector: new InjectedConnector()
    })
  return (
    <>
      <div>
        <button onClick={() => connect()}>Connect</button>
        <p>{isConnected && address}</p>
      </div>
    </>
  );
}
