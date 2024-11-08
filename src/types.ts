export type Variant = 'primary' | 'secondary' | 'tertiary';
export type Size = 'small' | 'medium' | 'large';

export type VariantScheme = Partial<Record<Variant, string>>;
export type SizeScheme = Partial<Record<Size, string>>;
