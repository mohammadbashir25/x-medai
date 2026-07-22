import { Star } from "lucide-react";
import { contactFooterStrip } from "../data/data";

const ContactFooterStrip = () => {
  const { rating, region, workInquiries } = contactFooterStrip;

  return (
    <div className="grid gap-10 border-t border-border pt-10 sm:grid-cols-3">
      {/* Rating badge - original, not a third-party trademark */}
      <div className="inline-flex w-fit flex-col gap-2 rounded-xl border border-border bg-card px-5 py-4">
        <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
          {rating.source}
        </p>
        <div className="flex items-center gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              size={14}
              className="fill-primary text-primary"
            />
          ))}
        </div>
        <p className="text-xs text-muted-foreground">
          Rating {rating.value.toFixed(2)} | {rating.count} Reviews
        </p>
      </div>

      <div>
        <h4 className="font-heading text-sm font-semibold text-foreground">
          {region.heading}
        </h4>
        <p className="mt-2 text-sm font-medium text-foreground">{region.company}</p>
        <div className="mt-1 space-y-0.5 text-sm text-muted-foreground">
          {region.addressLines.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>
      </div>

      <div>
        <h4 className="font-heading text-sm font-semibold text-foreground">
          {workInquiries.heading}
        </h4>
        <p className="mt-2 text-sm text-muted-foreground">{workInquiries.description}</p>
        <a
          href={workInquiries.linkHref}
          className="mt-1 inline-block text-sm font-medium text-foreground underline underline-offset-4 transition-colors duration-300 hover:text-primary"
        >
          {workInquiries.linkLabel}
        </a>
      </div>
    </div>
  );
};

export default ContactFooterStrip;
