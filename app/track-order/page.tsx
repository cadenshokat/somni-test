'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Package, Truck, CheckCircle, Clock, Search, AlertCircle } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';

const orderStatuses = [
  { status: 'Order Placed', icon: CheckCircle, complete: true },
  { status: 'Processing', icon: Clock, complete: true },
  { status: 'Shipped', icon: Truck, complete: false },
  { status: 'Delivered', icon: Package, complete: false },
];

export default function TrackOrder() {
  const { user } = useAuth();
  const [orderNumber, setOrderNumber] = useState('');
  const [email, setEmail] = useState('');
  const [searched, setSearched] = useState(false);
  const [order, setOrder] = useState<null | { id: string; status: string; date: string }>(null);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setSearched(true);
    // Simulate order lookup - in production this would call the API
    setOrder(null);
  };

  return (<>
    {/* Hero Section */}
    <section className="bg-gradient-to-br from-primary to-primary/90 text-primary-foreground py-16">
      <div className="container">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Track Your Order</h1>
          <p className="text-xl text-primary-foreground/80">
            Enter your order number to get real-time updates on your shipment.
          </p>
        </div>
      </div>
    </section>

    <section className="py-16 bg-background">
      <div className="container max-w-2xl">
        {user ? (
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Package className="h-5 w-5" />
                Your Recent Orders
              </CardTitle>
              <CardDescription>
                View and track all your orders from your account.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                You're signed in. View your order history for tracking information.
              </p>
              <Button asChild>
                <Link href="/account/orders">View Order History</Link>
              </Button>
            </CardContent>
          </Card>
        ) : null}

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Search className="h-5 w-5" />
              Track by Order Number
            </CardTitle>
            <CardDescription>
              Don't have an account? Enter your order details below.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSearch} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="orderNumber">Order Number *</Label>
                <Input
                  id="orderNumber"
                  value={orderNumber}
                  onChange={(e) => setOrderNumber(e.target.value)}
                  placeholder="e.g., SOMNI-12345"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="The email used for your order"
                  required
                />
              </div>
              <Button type="submit" className="w-full">
                Track Order
              </Button>
            </form>

            {searched && !order && (
              <div className="mt-6 p-4 bg-muted rounded-lg flex items-start gap-3">
                <AlertCircle className="h-5 w-5 text-muted-foreground mt-0.5" />
                <div>
                  <p className="font-medium">Order not found</p>
                  <p className="text-sm text-muted-foreground">
                    Please check your order number and email address and try again.
                    If you continue to have issues, please <Link href="/contact" className="text-primary underline">contact us</Link>.
                  </p>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Example Order Status */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Order Status Example</CardTitle>
            <CardDescription>
              Here's what order tracking looks like when you find your order.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-muted" />
              <div className="space-y-8">
                {orderStatuses.map((step, index) => (
                  <div key={step.status} className="relative flex items-start gap-4 pl-10">
                    <div
                      className={`absolute left-0 w-8 h-8 rounded-full flex items-center justify-center ${step.complete
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-muted text-muted-foreground'
                        }`}
                    >
                      <step.icon className="h-4 w-4" />
                    </div>
                    <div>
                      <p className={`font-medium ${!step.complete && 'text-muted-foreground'}`}>
                        {step.status}
                      </p>
                      {step.complete && (
                        <p className="text-sm text-muted-foreground">
                          {index === 0 ? 'January 10, 2026 at 2:30 PM' : 'January 11, 2026 at 9:15 AM'}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Help Section */}
        <div className="mt-8 p-6 bg-muted rounded-lg text-center">
          <h3 className="font-semibold mb-2">Need Help?</h3>
          <p className="text-muted-foreground mb-4">
            Our support team is available to assist with any order questions.
          </p>
          <div className="flex gap-4 justify-center">
            <Button variant="outline" asChild>
              <Link href="/contact">Contact Support</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/faq">View FAQs</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  </>
  );
}
