'use client'

import { useState } from 'react'

const transactions = [
  { txHash: '0x2024566...', block: '5386568', age: 'now', from: '0x7e0f4b6...', to: 'B6Rb4d7...', value: '36,857.38 YEN' },
  { txHash: '0x1024566...', block: '5386567', age: '1 min ago', from: '0x8e0f4b6...', to: 'A6Rb4d7...', value: '42,000.00 YEN' },
  { txHash: '0x3024566...', block: '5386566', age: '2 mins ago', from: '0x9e0f4b6...', to: 'C6Rb4d7...', value: '15,500.50 YEN' },
]

export default function TransactionsTable() {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className="mt-8">
      <h2 className="text-lg font-semibold mb-4">
        Transactions for address: <span className="text-gray-500 text-xs md:text-sm break-all">B6Rb4d773EUEfbuJBSL4uhsCw6KwyCC7F9f27BB/VN2q</span>
      </h2>
      <div className="border rounded-lg overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">TxHash</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Block</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Age</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">From</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">To</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Value</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {transactions.slice(0, isExpanded ? undefined : 1).map((tx, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-600">{tx.txHash}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{tx.block}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{tx.age}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-600">{tx.from}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{tx.to}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{tx.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {!isExpanded && (
        <button
          className="mt-4 text-blue-600 hover:text-blue-800 text-sm"
          onClick={() => setIsExpanded(true)}
        >
          View more transactions
        </button>
      )}
    </div>
  )
}

