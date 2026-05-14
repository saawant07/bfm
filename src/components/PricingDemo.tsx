import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import * as PricingCard from '@/components/ui/pricing-card';
import {
	CheckCircle2,
	Rocket,
	TrendingUp,
	Zap,
} from 'lucide-react';

export default function PricingDemo() {
	const plans = [
		{
			icon: <Rocket />,
			description: 'Just starting out. Clean digital foundation. No bloat. The essentials, done properly.',
			name: 'Starter',
			price: '₹5,999',
			period: '/mo',
			variant: 'outline',
			features: [
				'Brand audit & competitor analysis',
				'Core messaging & positioning document',
				'1 high-converting landing page design',
				'Basic SEO setup & Google Business profile',
				'Monthly performance snapshot',
				'Email support (48hr response)',
			],
		},
		{
			icon: <TrendingUp />,
			description: "You've got traction. Time for a real growth engine. Strategy, content, and web as one system.",
			name: 'Growth',
			badge: '',
			price: '₹12,999',
			period: '/mo',
			variant: 'outline',
			features: [
				'Everything in Starter',
				'Brand strategy sprint & message house',
				'SEO content engine (4 articles/mo)',
				'Social media content calendar',
				'2 landing pages with A/B testing',
				'Google Analytics & Search Console setup',
				'Bi-weekly strategy calls',
				'Priority email support (24hr response)',
			],
		},
		{
			icon: <Zap />,
			name: 'Premium',
			badge: 'Most Chosen',
			description: 'The full stack. Strategy, website, content, paid media, analytics. One team. Everything connected.',
			price: '₹24,999',
			period: '/mo',
			variant: 'default',
			features: [
				'Everything in Growth',
				'Complete premium website design & development',
				'UI/UX design audit & conversion optimization',
				'Paid media management (Meta + Google)',
				'SEO content engine (8 articles/mo)',
				'Email marketing setup & automation flows',
				'Weekly performance review & optimization',
				'Dedicated growth strategist',
				'Slack channel for real-time collaboration',
			],
		},
	];

	return (
		<div className="w-full">
			<section className="grid gap-6 md:grid-cols-3 max-w-6xl mx-auto items-stretch">
				{plans.map((plan) => (
					<PricingCard.Card className="md:min-w-[280px] h-full flex flex-col" key={plan.name}>
						<PricingCard.Header>
							<PricingCard.Plan>
								<PricingCard.PlanName>
									<span className="text-[#B8862A]">{plan.icon}</span>
									<span>{plan.name}</span>
								</PricingCard.PlanName>
								{plan.badge && (
									<PricingCard.Badge>{plan.badge}</PricingCard.Badge>
								)}
							</PricingCard.Plan>
							<PricingCard.Price>
								<PricingCard.MainPrice>{plan.price}</PricingCard.MainPrice>
								<PricingCard.Period>{plan.period}</PricingCard.Period>
							</PricingCard.Price>
							<Button
								variant={plan.variant as "default" | "destructive" | "outline" | "secondary" | "ghost" | "link"}
								className={cn('w-full font-semibold mt-4')}
								onClick={() => window.location.href = '#contact'}
							>
								Get Started
							</Button>
						</PricingCard.Header>

						<PricingCard.Body className="flex-1">
							<PricingCard.Description>
								{plan.description}
							</PricingCard.Description>
							<div className="pt-2"></div>
							<PricingCard.List>
								{plan.features.map((item) => (
									<PricingCard.ListItem key={item}>
										<CheckCircle2
											className="text-[#B8862A] h-5 w-5 shrink-0"
											aria-hidden="true"
										/>
										<span>{item}</span>
									</PricingCard.ListItem>
								))}
							</PricingCard.List>
						</PricingCard.Body>
					</PricingCard.Card>
				))}
			</section>
		</div>
	);
}
