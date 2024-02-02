import { useAccount } from 'wagmi'
import { ConnectButton } from '@rainbow-me/rainbowkit';

export default function Home() {
  const { address, isConnected } = useAccount()

  return (
    <>
      <div>
        <ConnectButton />
        <p>{isConnected && address}</p>
      </div>
    </>
  );
}
