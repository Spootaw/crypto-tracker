import { useGetCryptoQuery } from '../redux/features/cryptoSlice';
import { useState } from 'react';

export default function CoinList() {
  const { data: crypto, isLoading } = useGetCryptoQuery();
  const [searchInput, SetSearchInput] = useState('');
  const FilteredData = () => {
    return crypto?.filter(
      data =>
        data.name.toLowerCase().includes(searchInput.toLowerCase()) ||
        data.symbol.toLowerCase().includes(searchInput.toLowerCase())
    );
  };
  return (
    <>
      <div>
        <input
          type="text"
          className="bg-gray-600 mb-8 focus:border-gray-700 focus:outline-gray-700 px-3 py-3 w-full rounded"
          placeholder="Search Crypto ..."
          value={searchInput}
          onChange={e => SetSearchInput(e.target.value)}
        />
      </div>
      <table className="table-auto max-w-screen-2xl w-full">
        <thead>
          <tr className={'text-gray-400'}>
            <th className={'text-right pb-1'}>#</th>
            <th className={'text-left pb-1 pl-10'}>COINS</th>
            <th className={'text-right pb-1'}>PRICE</th>
            <th className={'text-right pb-1'}>24H</th>
            <th className={'text-right pb-1'}>7D</th>
            <th className={'text-right pb-1'}>MARKET CAP</th>
            <th className={'text-right pb-1'}>TOTAL VOLUME</th>
            <th className={'text-right pb-1'}>CIRCULATING SUPPLY</th>
          </tr>
        </thead>
        <tbody className={'text-right'}>
          {isLoading ? (
            <div>Loading ...</div>
          ) : (
            FilteredData()?.map((entity, index) => (
              <tr key={index} className={'border-b border-gray-700'}>
                <td className={'text-gray-500 py-5'}>{entity.market_cap_rank}</td>
                <td>
                  <span className={'flex flex-row items-center ml-10'}>
                    <span>
                      <img className={'w-7'} src={entity.image} alt={entity.symbol.toUpperCase()} />
                    </span>
                    <span className={'flex flex-col items-start ml-4'}>
                      <span className={'font-bold'}>{entity.name}</span>
                      <span className={'text-gray-400'}>{entity.symbol.toUpperCase()}</span>
                    </span>
                  </span>
                </td>
                <td className={'font-bold'}>${entity.current_price.toLocaleString()}</td>
                <td>
                  {entity.price_change_percentage_24h < 0 ? (
                    <span className={'text-red-400'}>{entity.price_change_percentage_24h.toFixed(2)}%</span>
                  ) : (
                    <span className={'text-green-400'}>{entity.price_change_percentage_24h.toFixed(2)}%</span>
                  )}
                </td>
                <td>
                  {entity.price_change_percentage_7d_in_currency < 0 ? (
                    <span className={'text-red-400'}>{entity.price_change_percentage_7d_in_currency.toFixed(2)}%</span>
                  ) : (
                    <span className={'text-green-400'}>
                      {entity.price_change_percentage_7d_in_currency.toFixed(2)}%
                    </span>
                  )}
                </td>
                <td>${entity.market_cap.toLocaleString()}</td>
                <td>${entity.total_volume.toLocaleString()}</td>
                <td>
                  {entity.circulating_supply}{' '}
                  <span className={'text-gray-400 pl-1'}>{entity.symbol.toUpperCase()}</span>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </>
  );
}
