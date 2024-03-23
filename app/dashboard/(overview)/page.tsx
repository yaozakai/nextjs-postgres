import CardWrapper from '../cards';

import { Card } from '../cards';
import RevenueChart from '../revenue-chart';
import LatestInvoices from '../latest-invoices';
import { poppinsRegular } from '@/app/ui/fonts';
import { fetchCardData } from '@/app/lib/data';
import { fetchLatestInvoices } from '@/app/lib/data';
import { Suspense } from 'react';
import { 
  RevenueChartSkeleton,
  LatestInvoicesSkeleton,
  CardsSkeleton
} from '@/app/ui/skeletons';

 
export default async function Page() {

    const latestInvoices = await fetchLatestInvoices();
    const {
        numberOfInvoices,
        numberOfCustomers,
        totalPaidInvoices,
        totalPendingInvoices,
      } = await fetchCardData();
      
  return (
    <main>
      <h1 className={`${poppinsRegular.className} mb-4 text-xl md:text-2xl`}>
        Dashboard
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Suspense fallback={<CardsSkeleton />}>
          <CardWrapper />
        </Suspense>
        {/* <Card title="Collected" value={totalPaidInvoices} type="collected" /> */}
        {/* <Card title="Pending" value={totalPendingInvoices} type="pending" /> */}
        {/* <Card title="Total Invoices" value={numberOfInvoices} type="invoices" /> */}
        {/* <Card
          title="Total Customers"
          value={numberOfCustomers}
          type="customers"
        /> */}
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        <Suspense fallback={<RevenueChartSkeleton />}>
          <RevenueChart />
        </Suspense>
        <Suspense fallback={<LatestInvoicesSkeleton />}>
          <LatestInvoices />
        </Suspense>
      </div>
    </main>
  );
}