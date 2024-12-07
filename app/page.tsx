import Image from "next/image"
import TransactionsTable from "./components/Transactiontable"

export default function Home() {
  return (
    <div className="min-h-screen  bg-gradient-to-br from-[#02AC03] to-[#6cdc7a] p-4 flex flex-col items-center justify-start pt-8">
      <div className="bg-white rounded-lg max-w-4xl w-full p-4 md:p-6 space-y-6">
        <div className="flex justify-center">
          <Image
            src="/images/yenemoji.webp"
            alt="Logo"
            width={50}
            height={50}
            className="mb-4"
          />
        </div>

        <div className="bg-blue-600 text-white p-4 rounded-lg text-center space-y-4">
          <p className="text-sm md:text-base">
            Verify with 3,000 YEN to 500,000 YEN to the automated contract address below and get between 9,000 YEN to 500,000 YEN sent back to the address you sent from.
          </p>
          <p className="text-sm md:text-base">You receive 3x the amount you verify with immediately.</p>
          <p className="font-bold text-sm md:text-base">
            For example, if you send 50,000 YEN you get back 150,000 YEN to the wallet address you sent from
          </p>
        </div>

        <div className="space-y-4">
          <p className="text-center text-gray-600 break-all text-xs md:text-sm">
            B6Rb4d773EUEfbuJBSL4uhsCw6KwyCC7F9f27BB/VN2q
          </p>
          <div className="flex justify-center">
            <button 
              className="bg-blue-600 text-white hover:bg-blue-700 px-4 py-2 rounded flex items-center gap-2 text-sm md:text-base"
              
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75" />
              </svg>
              Copy contract address to Clipboard
            </button>
          </div>
        </div>

        <div className="flex justify-center">
        <Image
            src="/images/stoptrading.webp"
            alt="Logo"
            width={200}
            height={200}
            className="mb-4 w-full"
          />
        </div>

        <div className="text-center space-y-4">
          <p className="text-gray-600">Waiting for your payment</p>
          <div className="flex justify-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
          </div>
          <p className="text-sm text-gray-500">Still waiting for transaction confirmation</p>
          <p className="text-xs text-gray-400">Once we receive your transaction, the outgoing transaction is processed to your address.</p>
          <p className="text-xs text-gray-400">Every address that is sent has gets their YEN immediately sent back</p>
        </div>

        <div className="space-y-2">
          <p className="text-center font-medium">Counting Just a million (YEN) left...</p>
          <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
            <div className="bg-gradient-to-r from-red-500 to-red-600 h-full w-3/4"></div>
          </div>
          <p className="text-center text-sm">18,911,627 / 50,000,000</p>
        </div>

        <TransactionsTable />
      </div>
    </div>
  )
}

