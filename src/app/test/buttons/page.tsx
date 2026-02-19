import { PrimaryButton } from "@/components/PrimaryButton";

export default function ButtonsAuditPage() {
  return (
    <div className="min-h-screen bg-[var(--cds-background)] p-[var(--cds-spacing-07)]">
      <h1 className="mb-[var(--cds-spacing-06)] text-xl leading-7 text-[var(--cds-text-primary)]">
        PrimaryButton audit
      </h1>

      <div className="flex flex-col gap-[var(--cds-spacing-09)]">
        {/* Active: standard button */}
        <section className="flex flex-col gap-[var(--cds-spacing-03)]">
          <h2 className="text-base font-semibold leading-6 text-[var(--cds-text-primary)]">
            Active
          </h2>
          <p className="text-sm leading-5 text-[var(--cds-text-secondary)]">
            Standard button with testId=&quot;btn-save&quot;.
          </p>
          <PrimaryButton testId="btn-save">Save</PrimaryButton>
        </section>

        {/* Disabled */}
        <section className="flex flex-col gap-[var(--cds-spacing-03)]">
          <h2 className="text-base font-semibold leading-6 text-[var(--cds-text-primary)]">
            Disabled
          </h2>
          <p className="text-sm leading-5 text-[var(--cds-text-secondary)]">
            Button with disabled prop and testId=&quot;btn-disabled&quot;.
          </p>
          <PrimaryButton testId="btn-disabled" disabled>
            Disabled
          </PrimaryButton>
        </section>

        {/* Constrained: button in narrow container */}
        <section className="flex flex-col gap-[var(--cds-spacing-03)]">
          <h2 className="text-base font-semibold leading-6 text-[var(--cds-text-primary)]">
            Constrained
          </h2>
          <p className="text-sm leading-5 text-[var(--cds-text-secondary)]">
            Button inside a 200px-wide container to test width behavior.
          </p>
          <div className="w-[200px]">
            <PrimaryButton testId="btn-constrained" className="w-full">
              Constrained
            </PrimaryButton>
          </div>
        </section>
      </div>
    </div>
  );
}
