import CoinList from '../components/CoinList';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout>
      <div className="container w-full text-gray-100 mx-auto">
        <CoinList />
      </div>
    </Layout>
  );
}
