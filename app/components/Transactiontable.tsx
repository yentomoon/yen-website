'use client'

import { useState } from 'react'

const transactions = [
    { txHash: '1aBxR8zN...', block: '5386572', age: 'now', from: '0x2d3f1a9...', to: 'F9Tc7aB...', value: '12,345.67 YEN' },
    { txHash: '9wYvPQoL...', block: '5386571', age: '1 min ago', from: '0x4c5e8d7...', to: 'G7Ra5cF...', value: '28,560.90 YEN' },
    { txHash: '3vMnQWkJ...', block: '5386570', age: '2 mins ago', from: '0x7b2e5a1...', to: 'H8Db3eG...', value: '6,890.32 YEN' },
    { txHash: '4tWxUYvK...', block: '5386569', age: '3 mins ago', from: '0x8a3f9b2...', to: 'I9Nc4dH...', value: '45,200.15 YEN' },
    { txHash: '2pBxYZwQ...', block: '5386568', age: '4 mins ago', from: '0x6d7e2b4...', to: 'J6Fb2eI...', value: '9,876.54 YEN' },
    { txHash: '7qAvPLkM...', block: '5386567', age: '5 mins ago', from: '0x9f3c8e1...', to: 'K5Gc3bJ...', value: '33,210.76 YEN' },
    { txHash: '6tJxQWmR...', block: '5386566', age: '6 mins ago', from: '0x5e1a7d6...', to: 'L4Ec2fK...', value: '19,800.00 YEN' },
    { txHash: '8pLzRVnQ...', block: '5386565', age: '7 mins ago', from: '0x3a2b9f4...', to: 'M3Db1gL...', value: '11,234.99 YEN' },
    { txHash: '3mQvNYoK...', block: '5386564', age: '8 mins ago', from: '0x7d5f3e2...', to: 'N2Ab7hM...', value: '24,567.89 YEN' },
    { txHash: '5kNxRLvP...', block: '5386563', age: '9 mins ago', from: '0x9e1c7f3...', to: 'O1Bc6jN...', value: '30,678.12 YEN' },
  ];
  
export default function TransactionsTable() {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className="mt-8">
      <h2 className="text-lg font-semibold mb-4">
        Transactions for address: <span className="text-gray-500 text-xs md:text-sm break-all">yenGkKHgR7hxti3zuSgjfYvQASBK84p5cjSyfCiwmLa</span>
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

