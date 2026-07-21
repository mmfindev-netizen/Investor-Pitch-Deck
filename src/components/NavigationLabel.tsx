interface NavigationLabelProps {
  label: string;
}

export function NavigationLabel({ label }: NavigationLabelProps) {
  return <div className="navigation-label">{label}</div>;
}
