export default function PlusIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={58} height={59} fill="none" {...props}>
      <circle cx={29} cy={29.5} r={28.5} fill="#F3F3F3" stroke="#191A23" />
      <path
        fill="#191A23"
        d="M25.6 41.58v-9.72H16v-5.64h9.6V16.5h5.88v9.72h9.6v5.64h-9.6v9.72H25.6Z"
      />
    </svg>
  );
}
