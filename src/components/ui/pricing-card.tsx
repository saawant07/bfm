import React from 'react';
import { cn } from '@/lib/utils';

function Card({ className, ...props }: React.ComponentProps<'div'>) {
	return (
		<div
			className={cn(
				'relative w-full max-w-sm rounded-2xl',
				'p-1.5 shadow-2xl backdrop-blur-xl',
				'border border-white/10',
				className,
			)}
			style={{ background: 'rgba(13, 24, 20, 0.85)' }}
			{...props}
		/>
	);
}

function Header({
	className,
	children,
	glassEffect = true,
	...props
}: React.ComponentProps<'div'> & {
	glassEffect?: boolean;
}) {
	return (
		<div
			className={cn(
				'relative mb-4 rounded-xl border border-white/8 p-6',
				className,
			)}
			style={{ background: 'rgba(21, 36, 29, 0.7)' }}
			{...props}
		>
			{/* Top glass gradient */}
			{glassEffect && (
				<div
					aria-hidden="true"
					className="absolute inset-x-0 top-0 h-48 rounded-[inherit]"
					style={{
						background:
							'linear-gradient(180deg, rgba(184,134,42,0.08) 0%, rgba(184,134,42,0.02) 40%, rgba(0,0,0,0) 100%)',
					}}
				/>
			)}
			{children}
		</div>
	);
}

function Plan({ className, ...props }: React.ComponentProps<'div'>) {
	return (
		<div
			className={cn('mb-8 flex items-center justify-between', className)}
			{...props}
		/>
	);
}

function Description({ className, ...props }: React.ComponentProps<'p'>) {
	return (
		<p className={cn('text-sm', className)} style={{ color: '#8a9e92' }} {...props} />
	);
}

function PlanName({ className, ...props }: React.ComponentProps<'div'>) {
	return (
		<div
			className={cn(
				"flex items-center gap-2 text-base font-semibold text-white [&_svg:not([class*='size-'])]:size-5",
				className,
			)}
			{...props}
		/>
	);
}

function Badge({ className, ...props }: React.ComponentProps<'span'>) {
	return (
		<span
			className={cn(
				'rounded-full border px-3 py-1 text-xs font-medium',
				className,
			)}
			style={{ borderColor: 'rgba(184,134,42,0.3)', background: 'rgba(184,134,42,0.1)', color: '#B8862A' }}
			{...props}
		/>
	);
}

function Price({ className, ...props }: React.ComponentProps<'div'>) {
	return (
		<div className={cn('mb-4 flex items-end gap-1', className)} {...props} />
	);
}

function MainPrice({ className, ...props }: React.ComponentProps<'span'>) {
	return (
		<span
			className={cn('text-4xl font-extrabold tracking-tight text-white', className)}
			{...props}
		/>
	);
}

function Period({ className, ...props }: React.ComponentProps<'span'>) {
	return (
		<span
			className={cn('pb-1.5 text-sm', className)}
			style={{ color: '#8a9e92' }}
			{...props}
		/>
	);
}

function OriginalPrice({ className, ...props }: React.ComponentProps<'span'>) {
	return (
		<span
			className={cn(
				'ml-auto mr-1 text-lg line-through',
				className,
			)}
			style={{ color: '#5a7264' }}
			{...props}
		/>
	);
}

function Body({ className, ...props }: React.ComponentProps<'div'>) {
	return <div className={cn('space-y-6 p-5', className)} {...props} />;
}

function List({ className, ...props }: React.ComponentProps<'ul'>) {
	return <ul className={cn('space-y-4', className)} {...props} />;
}

function ListItem({ className, ...props }: React.ComponentProps<'li'>) {
	return (
		<li
			className={cn(
				'flex items-start gap-3 text-sm',
				className,
			)}
			style={{ color: '#c8d5cc' }}
			{...props}
		/>
	);
}

function Separator({
	children = 'Upgrade to access',
	className,
	...props
}: React.ComponentProps<'div'> & {
	children?: string;
	className?: string;
}) {
	return (
		<div
			className={cn(
				'flex items-center gap-3 text-sm',
				className,
			)}
			style={{ color: '#8a9e92' }}
			{...props}
		>
			<span className="h-[1px] flex-1" style={{ background: 'rgba(255,255,255,0.1)' }} />
			<span className="shrink-0">{children}</span>
			<span className="h-[1px] flex-1" style={{ background: 'rgba(255,255,255,0.1)' }} />
		</div>
	);
}

export {
	Card,
	Header,
	Description,
	Plan,
	PlanName,
	Badge,
	Price,
	MainPrice,
	Period,
	OriginalPrice,
	Body,
	List,
	ListItem,
	Separator,
};
