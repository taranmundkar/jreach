import * as React from "react"

type CardProps = React.HTMLAttributes<HTMLDivElement>

export const Card: React.ForwardRefExoticComponent<CardProps & React.RefAttributes<HTMLDivElement>>
export const CardHeader: React.ForwardRefExoticComponent<CardProps & React.RefAttributes<HTMLDivElement>>
export const CardFooter: React.ForwardRefExoticComponent<CardProps & React.RefAttributes<HTMLDivElement>>
export const CardTitle: React.ForwardRefExoticComponent<CardProps & React.RefAttributes<HTMLHeadingElement>>
export const CardDescription: React.ForwardRefExoticComponent<CardProps & React.RefAttributes<HTMLParagraphElement>>
export const CardContent: React.ForwardRefExoticComponent<CardProps & React.RefAttributes<HTMLDivElement>>
