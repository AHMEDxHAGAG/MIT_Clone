import type { SVGProps } from "react";

export function SceneRepresentationLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      aria-label="Scene Representation Group Logo showing four layered, angled triangles vaguely resembling a frustum"
      role="img"
      viewBox="0 0 80 80"
      {...props}
    >
      <defs>
        <linearGradient id="srg-logo-gradient" x1="50%" x2="50%" y1="-35%" y2="100%">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="1" />
        </linearGradient>
      </defs>
      <g className="srg-hyperplanes-logo" fill="url(#srg-logo-gradient)">
        <polygon opacity="0.7" points="64 70 80 45 0 45" />
        <polygon opacity="0.8" points="64 70 78 35 2 35" />
        <polygon points="64 70 72 25 8 25" />
        <polygon points="64 70 64 15 16 15" />
      </g>
    </svg>
  );
}

export function MitLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg aria-labelledby="mit-logo-title" role="img" viewBox="0 0 72 38" {...props}>
      <title id="mit-logo-title">Massachusetts Institute of Technology</title>
      <rect fill="var(--srg-mit-1)" height="8" width="20" x="52" />
      <rect fill="var(--srg-mit-1)" height="26" width="8" x="13" />
      <rect fill="var(--srg-mit-1)" height="38" width="8" x="26" />
      <rect fill="var(--srg-mit-1)" height="38" width="8" />
      <rect fill="var(--srg-mit-1)" height="25" width="8" x="52" y="13" />
      <rect fill="var(--srg-mit-1)" height="8" width="8" x="39" />
      <rect fill="var(--srg-mit-2)" height="25" width="8" x="39" y="13" />
    </svg>
  );
}

export function CsailLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      aria-label="2021 CSAIL Logo showing a symbolic representation of CSAIL's iconic Stata Center building"
      role="img"
      viewBox="0 0 150 86"
      {...props}
    >
      <g fill="none" fillRule="evenodd">
        <path
          d="M117.164 2.233v32.496h11.093v20.188h11.381l9.472-42.139-31.946-10.545Zm0 82.866 16.736-4.665 3.8-16.894h-20.536v21.559ZM27.87 0h-8.859l-2.705 10.112-.549 3.254h-.314l-.549-3.176L11.994 0h-8.82v18.265h5.448V8.739l-.195-3.332h.353l3.606 12.858h6.233l3.527-12.897h.353l-.197 3.647v9.25h5.568V0Zm5.84 18.266h6.311V0h-6.31v18.266ZM44.177 0h16.384v5.133h-5.018v13.132h-6.31V5.133h-5.056V0Z"
          fill="#898D8D"
        />
        <path
          d="m74.528 45.078 1.998 7.408h-5.564l2.037-7.408.627-3.058h.274l.627 3.058Zm37.238-3.294h-3.92v14.7h3.92v7.057H92.912v-7.057h3.92v-14.7h-3.92v-7.055h18.853v7.055Zm-18.2-27.085c-8.937 0-16.58 1.843-19.951 4.39l-5.79 15.64h12.388L90.717 63.54H79.114l-1.255-4.313h-8.113L68.49 63.54H57.158l-4.514 12.19c3.096 3.214 13.131 5.723 25.4 5.723 11.525 0 30.457-2.588 39.12-5.801V19.52c-3.254-2.08-13.053-4.822-23.598-4.822Z"
          fill="#F0B323"
        />
        <path
          d="M31.671 63.029v-8.152c2.157.822 5.45 1.372 8.702 1.372 2.783 0 3.881-.353 3.881-1.725 0-1.14-.9-1.373-3.881-1.882-4.154-.705-8.858-1.764-8.858-8.467 0-6.271 4.195-10.192 13.406-10.192 4.234 0 8.427.786 9.917 1.255v7.487c-3.058-.667-5.763-1.057-8.545-1.057-1.372 0-3.137.117-3.137 1.448 0 1.177 1.021 1.413 4.705 2.157 4.587.94 8.114 2.43 8.114 8.193 0 5.055-3.096 10.779-13.915 10.779-4.037 0-8.742-.666-10.389-1.216ZM70.496 27.51 0 22.89l2.893 20.47c1.847-5.562 6.838-9.377 16.195-9.377 3.098 0 6.313.548 7.919.98v8.35c-1.019-.314-3.802-.705-6.193-.705-4.154 0-7.252 1.489-7.252 6.388 0 5.489 3.92 6.703 7.761 6.703 2.04 0 3.254-.117 5.684-.703v8.153c-2.783.82-4.86 1.096-8.192 1.096-6.814 0-11.137-1.965-13.692-5.095l3.069 21.716 46.06-9.48L70.496 27.51Z"
          fill="#B94700"
        />
      </g>
    </svg>
  );
}
