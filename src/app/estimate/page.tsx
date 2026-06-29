"use client";

import { useState } from "react";
import { useEffect } from "react";
import { featuresByIndustry } from "@/data/features";
import { appFeaturesByIndustry } from "@/data/appFeatures";
import { getRecommendedPages } from "@/data/pageRecommendations";
import { getRecommendedTimeline } from "@/data/timelineRecommendations";
import { calculateEstimate } from "@/data/pricing";
import {
  getRecommendedScreens,
  getAppTimeline,
} from "@/data/appRecommendations";
const services = [
{
id: "website",
title: "Website Development",
description:
"Business websites, appointment systems, company websites and customer portals.",
},
{
id: "app",
title: "Mobile Application",
description:
"iOS and Android applications for customers, staff and businesses.",
},
{
id: "redesign",
title: "Website Redesign",
description:
"Transform outdated websites into modern high-converting experiences.",
},
{
id: "software",
title: "Custom Software",
description:
"Internal systems, dashboards, automation tools and business software.",
},
];

const industries = [
{
id: "healthcare",
title: "Healthcare & Clinics",
},
{
id: "medical_agency",
title: "Medical Agencies",
},
{
id: "fitness",
title: "Gyms & Fitness",
},
{
id: "restaurants",
title: "Restaurants & Cafes",
},
{
id: "real-estate",
title: "Real Estate",
},
{
id: "education",
title: "Education & Coaching",
},
{
id: "others",
title: "Other Businesses",
},
];

export default function EstimatePage() {
const [step, setStep] = useState(1);
useEffect(() => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}, [step]);
const whatsappNumber = "917990425573";
const [service, setService] = useState("");
const isAppFlow = service === "app";
const [industry, setIndustry] = useState("");
const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
const [openInfo, setOpenInfo] = useState<string | null>(null);
const [appType, setAppType] = useState("");
const getSelectedFeatureTitles = () => {
  const current =
    featuresByIndustry[
      industry as keyof typeof featuresByIndustry
    ];

  if (!current?.optional) return "";

  return current.optional
    .filter((f) => selectedFeatures.includes(f.id))
    .map((f) => `- ${f.title}`)
    .join("\n");
};
const getSelectedAppFeatureTitles = () => {
  const current =
    appFeaturesByIndustry[
      industry as keyof typeof appFeaturesByIndustry
    ];

  if (!current?.optional) return "";

  return current.optional
    .filter((f) => selectedFeatures.includes(f.id))
    .map((f) => `• *${f.title}*`)
    .join("\n");
};
const applyAppPreset = (
  preset: "basic" | "portal" | "management"
) => {
  const current =
    appFeaturesByIndustry[
      (industry || "others") as keyof typeof appFeaturesByIndustry
    ];

  const allIds = current.optional.map((f) => f.id);

  // HEALTHCARE

  if (industry === "healthcare") {
  if (preset === "basic") {
    setSelectedFeatures([
      "appointments",
      "reminders",
    ]);
  }

  if (preset === "portal") {
    setSelectedFeatures([
      "appointments",
      "patient-accounts",
      "reports",
      "prescriptions",
      "reminders",
    ]);
  }

  if (preset === "management") {
    setSelectedFeatures(allIds);
  }

  return;
}
  // MEDICAL AGENCY

  if (industry === "medical_agency") {
    if (preset === "basic") {
      setSelectedFeatures([
        "bill-management",
        "customer-ledger",
      ]);
    }

    if (preset === "portal") {
      setSelectedFeatures([
        "bill-management",
        "customer-ledger",
        "due-tracking",
        "whatsapp-reminders",
        "manual-payments",
      ]);
    }

    if (preset === "management") {
      setSelectedFeatures(allIds);
    }
    return;
  }

  // FITNESS

  if (industry === "fitness") {
    if (preset === "basic") {
      setSelectedFeatures([
        "attendance",
        "membership-renewal",
      ]);
    }

    if (preset === "portal") {
      setSelectedFeatures([
        "attendance",
        "membership-renewal",
        "workout-plans",
        "diet-plans",
        "progress-tracking",
      ]);
    }

    if (preset === "management") {
      setSelectedFeatures(allIds);
    }
    return;
  }

  // RESTAURANTS

  if (industry === "restaurants") {
    if (preset === "basic") {
      setSelectedFeatures([
        "table-booking",
      ]);
    }

    if (preset === "portal") {
      setSelectedFeatures([
        "table-booking",
        "food-ordering",
        "online-payments",
        "arrival-confirmation",
      ]);
    }

    if (preset === "management") {
      setSelectedFeatures(allIds);
    }
    return;
  }

  // REAL ESTATE

  if (industry === "real-estate") {
    if (preset === "basic") {
      setSelectedFeatures([
        "property-search",
      ]);
    }

    if (preset === "portal") {
      setSelectedFeatures([
        "property-search",
        "advanced-filters",
        "saved-properties",
        "property-visits",
      ]);
    }

    if (preset === "management") {
      setSelectedFeatures(allIds);
    }
    return;
  }

  // EDUCATION

  if (industry === "education") {
    if (preset === "basic") {
      setSelectedFeatures([
        "study-material",
      ]);
    }

    if (preset === "portal") {
      setSelectedFeatures([
        "student-accounts",
        "study-material",
        "video-lessons",
        "attendance",
      ]);
    }

    if (preset === "management") {
      setSelectedFeatures(allIds);
    }
    return;
  }

  // OTHERS

  if (industry === "others") {
    if (preset === "basic") {
      setSelectedFeatures([]);
    }

    if (preset === "portal") {
      setSelectedFeatures([]);
    }

    if (preset === "management") {
      setSelectedFeatures(allIds);
    }
    return;
  }
};
const [pages, setPages] = useState(6);
const [screens, setScreens] = useState(0);
const [appEstimate, setAppEstimate] = useState({
  low: 0,
  high: 0,
});
const [timeline, setTimeline] = useState("recommended");
const [selectedPackage, setSelectedPackage] =
  useState<string | null>(null);
const toggleFeature = (featureId: string) => {
  setSelectedFeatures((prev) =>
    prev.includes(featureId)
      ? prev.filter((id) => id !== featureId)
      : [...prev, featureId]
  );
};

const toggleInfo = (featureId: string) => {
  setOpenInfo((prev) => (prev === featureId ? null : featureId));
};


const applyPreset = (
  preset: "Starter" | "Growth" | "Premium") => {
    setSelectedPackage(preset);
  const current =
    featuresByIndustry[
      (industry || "others") as keyof typeof featuresByIndustry
    ];

  const allIds = current.optional.map((f) => f.id);
  console.log("Industry:", industry);
  console.log("All IDs:", allIds);

    if (industry === "medical_agency") {

    if (preset === "Starter") {
      setSelectedFeatures([
        "bill-management",
        "customer-ledger",
        "manual-payment-update",
      ]);
    }

    if (preset === "Growth") {
      setSelectedFeatures([
        "bill-management",
        "customer-ledger",
        "manual-payment-update",
        "due-date-tracking",
        "partial-payments",
        "sales-dashboard",
        "whatsapp-reminders",
      ]);
    }

    if (preset === "Premium") {
      setSelectedFeatures(allIds);
    }

    return;
  }
  if (industry === "fitness") {

  if (preset === "Starter") {
    setSelectedFeatures([
      "free-trial",
      "membership-purchase",
      "whatsapp-reminders",
    ]);
  }

  if (preset === "Growth") {
    setSelectedFeatures([
      "free-trial",
      "membership-purchase",
      "membership-renewal",
      "attendance-tracking",
      "diet-plans",
      "workout-plans",
      "whatsapp-reminders",
    ]);
  }

  if (preset === "Premium") {
    setSelectedFeatures(allIds);
  }

  return;
}
if (industry === "healthcare") {

  if (preset === "Starter") {
    setSelectedFeatures([
      "appointments",
      "blog",
      "reminders",
    ]);
  }

  if (preset === "Growth") {
    setSelectedFeatures([
      "appointments",
      "blog",
      "reminders",
      "cms",
      "payments",
    ]);
  }

  if (preset === "Premium") {
    setSelectedFeatures([
      "appointments",
      "accounts",
      "reports",
      "prescriptions",
      "payments",
      "staff",
      "cms",
      "blog",
      "reminders",
    ]);
    console.log("Industry:", industry);
    console.log("Preset:", preset);
  }

  return;
}
if (industry === "restaurants") {
    if (preset === "Starter") {
      setSelectedFeatures([
        "table-reservation",
        "qr-menu",
        "review-system",
      ]);
    }

    if (preset === "Growth") {
      setSelectedFeatures([
        "table-reservation",
        "time-slot-management",
        "pre-order-food",
        "arrival-checkin",
        "online-payments",
        "qr-menu",
        "review-system",
      ]);
    }

    if (preset === "Premium") {
      setSelectedFeatures(allIds);
    }

    return;
  }
  // REAL ESTATE
if (industry === "real-estate") {
  if (preset === "Starter") {
    setSelectedFeatures([
      "property-search",
      "property-filters",
      "property-enquiry",
      "whatsapp-property",
    ]);
  }

  if (preset === "Growth") {
    setSelectedFeatures([
      "property-search",
      "property-filters",
      "property-enquiry",
      "whatsapp-property",
      "property-management",
      "property-status",
      "property-visit",
      "lead-management",
    ]);
  }

  if (preset === "Premium") {
    setSelectedFeatures(allIds);
  }

  return;
}
// EDUCATION
if (industry === "education") {
  if (preset === "Starter") {
    setSelectedFeatures([
      "admission-form",
      "study-material",
      "holiday-calendar",
    ]);
  }

  if (preset === "Growth") {
    setSelectedFeatures([
      "student-accounts",
      "study-material",
      "video-lessons",
      "attendance-system",
      "holiday-calendar",
      "admission-form",
      "student-dashboard",
    ]);
  }

  if (preset === "Premium") {
    setSelectedFeatures(allIds);
  }

  return;
}


  /* OTHER INDUSTRIES */

  if (preset === "Starter") {
    setSelectedFeatures(
      allIds.filter((id) =>
        [
          "appointments",
          "blog",
        ].includes(id)
      )
    );
  }

  if (preset === "Growth") {
    setSelectedFeatures(
      allIds.filter((id) =>
        [
          "appointments",
          "blog",
          "cms",
          "payments",
        ].includes(id)
      )
    );
  }

  if (preset === "Premium") {
    setSelectedFeatures(allIds);
  }
};
const calculateAppEstimate = () => {
  let base = 25000;

  switch (industry) {
    case "healthcare":
      base = 30000;
      break;

    case "medical_agency":
      base = 40000;
      break;

    case "fitness":
      base = 28000;
      break;

    case "restaurants":
      base = 30000;
      break;

    case "real-estate":
      base = 45000;
      break;

    case "education":
      base = 35000;
      break;

    default:
      base = 25000;
  }

  const screenCost = screens * 2500;

  const featureCost =
    selectedFeatures.length * 3000;

  const low =
    base +
    screenCost +
    featureCost;

  const high =
    Math.round(low * 1.35);

  setAppEstimate({
    low,
    high,
  });
};
const recommendedPages = getRecommendedPages(
  industry,
  selectedFeatures.length
);
const timelineOptions = getRecommendedTimeline(
  pages,
  selectedFeatures.length
);
const estimate = calculateEstimate({
  service,
  industry,
  pages,
  features: selectedFeatures.length,
  timeline,
});
const progress =
  step === 99
    ? 100
    : (step / 6) * 100;

return ( <main className="mx-auto max-w-5xl px-6 py-16">
{/* Header */} <div className="mb-10"> <h1 className="text-4xl font-semibold text-slate-900">
Project Estimator </h1>
    <p className="mt-3 text-slate-600">
      Answer a few questions and receive an estimated project range.
    </p>
  </div>

  {/* Progress */}
  <div className="mb-12">
    <div className="flex items-center justify-between text-sm text-slate-500">
      <span>
        {step === 99
          ? "Consultation"
          : `Step ${step} of 6`}
      </span>
      <span>{Math.round(progress)}%</span>
    </div>

    <div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-200">
      <div
        className="h-full rounded-full bg-slate-900 transition-all duration-300"
        style={{ width: `${progress}%` }}
      />
    </div>
  </div>

  {/* STEP 1 */}
  {step === 1 && (
  <>
    <h2 className="text-2xl font-semibold text-slate-900">
      What do you need?
    </h2>

    <div className="mt-8 grid gap-5 md:grid-cols-2">
      {services.map((item) => (
        <button
          type="button"
          key={item.id}
          onClick={() => {
            setService(item.id);
          }}
          className={`rounded-3xl border p-6 text-left transition-all duration-300 ${
            service === item.id
              ? "border-slate-900 bg-slate-50 shadow-lg"
              : "border-slate-200 hover:border-slate-400 hover:shadow-md"
          }`}
        >
          <h3 className="text-xl font-medium text-slate-900">
            {item.title}
          </h3>

          <p className="mt-3 text-slate-600">
            {item.description}
          </p>
        </button>
      ))}
    </div>

    <div className="mt-10 flex justify-end">
      <button
        type="button"
        disabled={!service}
        onClick={() => {
          if (
            service === "redesign" ||
            service === "software"
          ) {
            setStep(99);
          } else {
            setStep(2);
          }
        }}
        className="
          rounded-full
          bg-slate-900
          px-6
          py-3
          text-white
          transition-all
          duration-300
          hover:scale-105
          disabled:cursor-not-allowed
          disabled:opacity-50
        "
      >
        Continue →
      </button>
    </div>
  </>
)}
  {/* STEP 2 */}
  {step === 2 && (
    <>
      <h2 className="text-2xl font-semibold text-slate-900">
        Which industry best describes your business?
      </h2>

      <div className="mt-8 grid gap-5 md:grid-cols-2">
        {industries.map((item) => (
          <button
            key={item.id}
            onClick={() => setIndustry(item.id)}
            className={`rounded-3xl border p-6 text-left transition ${
              industry === item.id
                ? "border-slate-900 bg-slate-50"
                : "border-slate-200 hover:border-slate-400"
            }`}
          >
            <h3 className="text-xl font-medium text-slate-900">
              {item.title}
            </h3>
          </button>
        ))}
      </div>

      <div className="mt-10 flex items-center justify-between">
        <button
          onClick={() => setStep(1)}
          className="rounded-full border border-slate-300 px-6 py-3"
        >
          ← Back
        </button>

        <button
          disabled={!industry}
          onClick={() => setStep(3)}
          className="rounded-full bg-slate-900 px-6 py-3 text-white disabled:cursor-not-allowed disabled:opacity-50"
        >
          Continue →
        </button>
      </div>
    </>
  )}

  {/* STEP 3 PLACEHOLDER */}
  {/* STEP 3 */}
  {step === 3 && !isAppFlow &&(
    <>
        <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
        <div>
            <h2 className="text-2xl font-semibold text-slate-900">
            Choose Features
            </h2>

            <p className="mt-2 text-slate-600">
            Select the features you'd like included in your project.
            </p>
        </div>

        <div className="rounded-2xl border border-slate-200 p-5">
            <p className="text-sm text-slate-500">
                Project Summary
            </p>

            <div className="mt-4 space-y-2 text-sm">
                <p>
                <span className="text-slate-500">Service:</span>{" "}
                {service || "-"}
                </p>

                <p>
                <span className="text-slate-500">Industry:</span>{" "}
                {industry || "-"}
                </p>

                <p>
                  <span className="text-slate-500">
                    Additional Features:
                  </span>{" "}
                  {selectedFeatures.length > 0
                    ? selectedFeatures.length
                    : "None Selected"}
                </p>
            </div>
        </div>
        </div>

        {/* FEATURES */}
        {/* INCLUDED FEATURES */}

        <div className="mt-10">
            <h3 className="text-xl font-semibold text-slate-900">
                Included In Your Website
            </h3>

            <p className="mt-2 text-slate-600">
                These features are included by default.
            </p>

            <div className="mt-6 grid gap-3 md:grid-cols-2">
                {featuresByIndustry[
                (industry || "others") as keyof typeof featuresByIndustry
                ].included.map((item) => (
                <div
                    key={item}
                    className="flex items-center gap-3 rounded-2xl border border-slate-200 p-4"
                >
                    <span className="text-green-600">✓</span>

                    <span>{item}</span>
                </div>
                ))}
            </div>
        </div>
                {/* PRESETS */}

        <div className="mt-8">
          <p className="mb-3 text-sm text-slate-500">
            Recommended Packages
          </p>
                    <p className="mt-2 text-slate-600">
          Choose a package to automatically select recommended features.
          You can still add or remove features manually.
        </p>
          <div className="flex flex-wrap gap-3">

          <button
            onClick={() => applyPreset("Starter")}
            className={`
              rounded-full
              border
              px-6
              py-3
              font-medium
              transition-all
              duration-300
              ${
                selectedPackage === "Starter"
                  ? "border-blue-600 bg-blue-600 text-white shadow-lg shadow-blue-500/30 scale-105"
                  : "border-slate-300 bg-white text-slate-700 hover:border-blue-400 hover:text-blue-600 hover:shadow-md"
              }
            `}
          >
            Starter
          </button>

          <button
            onClick={() => applyPreset("Growth")}
            className={`
              rounded-full
              border
              px-6
              py-3
              font-medium
              transition-all
              duration-300
              ${
                selectedPackage === "Growth"
                  ? "border-blue-600 bg-blue-600 text-white shadow-lg shadow-blue-500/30 scale-105"
                  : "border-slate-300 bg-white text-slate-700 hover:border-blue-400 hover:text-blue-600 hover:shadow-md"
              }
            `}
          >
            Growth
          </button>

          <button
            onClick={() => applyPreset("Premium")}
            className={`
              rounded-full
              border
              px-6
              py-3
              font-medium
              transition-all
              duration-300
              ${
                selectedPackage === "Premium"
                  ? "border-slate-900 bg-gradient-to-r from-slate-900 to-slate-700 text-white shadow-xl scale-105"
                  : "border-slate-300 bg-white text-slate-700 hover:border-slate-900 hover:text-slate-900 hover:shadow-md"
              }
            `}
          >
            Premium
          </button>

        </div>


        </div>


        {/* OPTIONAL FEATURES */}

        <div className="mt-14">
        <h3 className="text-xl font-semibold text-slate-900">
            Additional Features
        </h3>

        <p className="mt-2 text-slate-600">
            Select any additional functionality you'd like.
        </p>

        <div className="mt-6 space-y-4">
            {featuresByIndustry[
            (industry || "others") as keyof typeof featuresByIndustry
            ].optional.map((feature) => (
            <div
                key={feature.id}
                className="rounded-2xl border border-slate-200 p-5"
            >
                <div className="flex items-center justify-between gap-4">
                <label className="flex flex-1 items-center gap-3">
                    <input
                    type="checkbox"
                    checked={selectedFeatures.includes(feature.id)}
                    onChange={() => toggleFeature(feature.id)}
                    />

                    <span>{feature.title}</span>
                </label>

                <button
                    onClick={() => toggleInfo(feature.id)}
                    className="flex h-8 w-8 items-center justify-center rounded-full border"
                >
                    {openInfo === feature.id ? "✕" : "i"}
                </button>
                </div>

                {openInfo === feature.id && (
                <p className="mt-4 text-sm text-slate-600">
                    {feature.description}
                </p>
                )}
            </div>
            ))}
        </div>
        </div>
        {/* NAVIGATION */}

        <div className="mt-10 flex items-center justify-between">
        <button
            onClick={() => setStep(2)}
            className="rounded-full border border-slate-300 px-6 py-3"
        >
            ← Back
        </button>

        <button
            onClick={() => {
              setPages(recommendedPages);
              setStep(4);
            }}
            className="rounded-full bg-slate-900 px-6 py-3 text-white disabled:opacity-50"
        >
            Continue →
        </button>
        </div>
    </>
   )}
   {/* APP STEP 3 */}

{step === 3 && isAppFlow && (
  <>
    <h2 className="text-2xl font-semibold text-slate-900">
      What type of app do you need?
    </h2>

    <p className="mt-2 text-slate-600">
      Choose the type that best matches your project.
    </p>

    <div className="mt-8 grid gap-5 md:grid-cols-3">

      <button
        onClick={() => setAppType("basic")}
        className={`rounded-3xl border p-6 text-left ${
          appType === "basic"
            ? "border-slate-900 bg-slate-50"
            : "border-slate-200"
        }`}
      >
        <h3 className="text-lg font-medium">
          Basic App
        </h3>

        <p className="mt-3 text-slate-600">
          Information, contact details and simple functionality.
        </p>
      </button>

      <button
        onClick={() => setAppType("portal")}
        className={`rounded-3xl border p-6 text-left ${
          appType === "portal"
            ? "border-slate-900 bg-slate-50"
            : "border-slate-200"
        }`}
      >
        <h3 className="text-lg font-medium">
          Customer Portal App
        </h3>

        <p className="mt-3 text-slate-600">
          User accounts, logins and personal dashboards.
        </p>
      </button>

      <button
        onClick={() => setAppType("management")}
        className={`rounded-3xl border p-6 text-left ${
          appType === "management"
            ? "border-slate-900 bg-slate-50"
            : "border-slate-200"
        }`}
      >
        <h3 className="text-lg font-medium">
          Business Management App
        </h3>

        <p className="mt-3 text-slate-600">
          Staff tools, dashboards and business operations.
        </p>
      </button>

    </div>

    <div className="mt-10 flex items-center justify-between">

      <button
        onClick={() => setStep(2)}
        className="rounded-full border border-slate-300 px-6 py-3"
      >
        ← Back
      </button>

      <button
        disabled={!appType}
        onClick={() => setStep(4)}
        className="rounded-full bg-slate-900 px-6 py-3 text-white disabled:opacity-50"
      >
        Continue →
      </button>

    </div>
  </>
)}
{/* APP STEP 4 */}

{step === 4 && isAppFlow && (
  <>
    <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
      <div>
        <h2 className="text-2xl font-semibold text-slate-900">
          Choose App Features
        </h2>

        <p className="mt-2 text-slate-600">
          Select functionality you'd like inside your mobile app.
        </p>
      </div>

      <div className="rounded-2xl border border-slate-200 p-5">
        <p className="text-sm text-slate-500">
          Selected Features
        </p>

        <p className="mt-2 text-2xl font-semibold">
          {selectedFeatures.length}
        </p>
      </div>
    </div>
    <div className="mt-8">
  <p className="mb-3 text-sm text-slate-500">
    Recommended App Packages
  </p>

  <div className="flex flex-wrap gap-3">

    <button
      onClick={() => applyAppPreset("basic")}
      className="rounded-full border px-5 py-2"
    >
      Basic App
    </button>

    <button
      onClick={() => applyAppPreset("portal")}
      className="rounded-full border px-5 py-2"
    >
      Customer Portal App
    </button>

    <button
      onClick={() => applyAppPreset("management")}
      className="rounded-full border px-5 py-2"
    >
      Business Management App
    </button>

  </div>

  <p className="mt-3 text-sm text-slate-500">
    Selecting a package automatically chooses recommended features.
    You can still customize everything manually.
  </p>
</div>
    {/* INCLUDED FEATURES */}

    <div className="mt-10">
      <h3 className="text-xl font-semibold">
        Included Features
      </h3>

      <div className="mt-6 grid gap-3 md:grid-cols-2">
        {appFeaturesByIndustry[
          (industry || "others") as keyof typeof appFeaturesByIndustry
        ].included.map((item) => (
          <div
            key={item}
            className="flex items-center gap-3 rounded-2xl border border-slate-200 p-4"
          >
            <span className="text-green-600">✓</span>
            <span>{item}</span>
          </div>
        ))}
      </div>
    </div>

    {/* OPTIONAL FEATURES */}

    <div className="mt-12">
      <h3 className="text-xl font-semibold">
        Additional Features
      </h3>

      <div className="mt-6 space-y-4">
        {appFeaturesByIndustry[
          (industry || "others") as keyof typeof appFeaturesByIndustry
        ].optional.map((feature) => (
          <div
            key={feature.id}
            className="rounded-2xl border border-slate-200 p-5"
          >
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-3">
                <input
                  type="checkbox"
                  checked={selectedFeatures.includes(feature.id)}
                  onChange={() => toggleFeature(feature.id)}
                />

                <span>{feature.title}</span>
              </label>

              <button
                onClick={() => toggleInfo(feature.id)}
                className="flex h-8 w-8 items-center justify-center rounded-full border"
              >
                {openInfo === feature.id ? "✕" : "i"}
              </button>
            </div>

            {openInfo === feature.id && (
              <p className="mt-4 text-sm text-slate-600">
                {feature.description}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>

    <div className="mt-10 flex items-center justify-between">
      <button
        onClick={() => setStep(3)}
        className="rounded-full border border-slate-300 px-6 py-3"
      >
        ← Back
      </button>

      <button
        onClick={() => {
  setScreens(
    getRecommendedScreens(
      industry,
      selectedFeatures.length
    )
  );

  setStep(5);
}}
        className="
rounded-full
bg-slate-900
px-6
py-3
text-white
transition-all
duration-300
hover:scale-105
hover:shadow-xl
"
      >
        Continue →
      </button>
    </div>
  </>
)}
   
   {/* STEP 4 */}
    {step === 4 && !isAppFlow &&(
      <>
        <div className="flex items-start justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-slate-900">
              How many pages do you need?
            </h2>

            <p className="mt-2 text-slate-600">
              We have recommended a page count based on your industry and selected features.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 p-5">
            <p className="text-sm text-slate-500">
              Recommended
            </p>

            <p className="text-3xl font-semibold">
              {recommendedPages}
            </p>

            <p className="text-sm text-slate-500">
              Pages
            </p>
          </div>
        </div>

        <div className="mt-10 rounded-3xl border border-slate-200 p-8">
          <div className="flex items-center justify-between">
            <p className="font-medium">
              Selected Pages
            </p>

            <p className="text-3xl font-semibold">
              {pages}
            </p>
          </div>

          <input
            type="range"
            min="1"
            max="25"
            value={pages}
            onChange={(e) =>
              setPages(Number(e.target.value))
            }
            className="mt-8 w-full"
          />

          <button
            onClick={() => setPages(recommendedPages)}
            className="mt-6 rounded-full border px-5 py-2"
          >
            Use Recommended ({recommendedPages})
          </button>
        </div>

        <div className="mt-10 rounded-2xl border border-slate-200 p-5">
          <p className="text-sm text-slate-500">
            Project Summary
          </p>

          <div className="mt-4 space-y-2">
            <p>Service: {service}</p>
            <p>Industry: {industry}</p>
            <p>Additional Features: {selectedFeatures.length}</p>
            <p>Pages: {pages}</p>
          </div>
        </div>

        <div className="mt-10 flex justify-between">
          <button
            onClick={() => setStep(3)}
            className="rounded-full border border-slate-300 px-6 py-3"
          >
            ← Back
          </button>

          <button
            onClick={() => setStep(5)}
            className="
rounded-full
bg-slate-900
px-6
py-3
text-white
transition-all
duration-300
hover:scale-105
hover:shadow-xl
"
          >
            Continue →
          </button>
        </div>
      </>
    )}
    {/* App Step5 */ }
    {step === 5 && isAppFlow && (
  <>
    <h2 className="text-2xl font-semibold text-slate-900">
      Recommended App Scope
    </h2>

    <p className="mt-2 text-slate-600">
      Based on your selected features.
    </p>

    <div className="mt-8 grid gap-6 md:grid-cols-2">

      <div className="rounded-3xl border border-slate-200 p-6">
        <p className="text-sm text-slate-500">
          Recommended Screens
        </p>

        <p className="mt-3 text-4xl font-semibold">
          {screens}
        </p>
      </div>

      <div className="rounded-3xl border border-slate-200 p-6">
        <p className="text-sm text-slate-500">
          Estimated Timeline
        </p>

        <p className="mt-3 text-4xl font-semibold">
          {Math.max(
            4,
            Math.ceil(screens / 2)
          )} Weeks
        </p>
      </div>

    </div>

    <div className="mt-10 flex items-center justify-between">
      <button
        onClick={() => setStep(4)}
        className="rounded-full border px-6 py-3"
      >
        ← Back
      </button>

      <button
        onClick={() => {
        calculateAppEstimate();
        setStep(6);
      }}
        className="
rounded-full
bg-slate-900
px-6
py-3
text-white
transition-all
duration-300
hover:scale-105
hover:shadow-xl
"
      >
        Continue →
      </button>
    </div>
  </>
)}
    {/* STEP 5 */}
    {step === 5 && !isAppFlow &&(
      <>
        <div>
          <h2 className="text-2xl font-semibold text-slate-900">
            Preferred Delivery Timeline
          </h2>

          <p className="mt-2 text-slate-600">
            Choose the timeline that best matches your priorities.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          <button
            onClick={() => setTimeline("flexible")}
            className={`rounded-3xl border p-6 text-left transition ${
              timeline === "flexible"
                ? "border-slate-900 bg-slate-50"
                : "border-slate-200"
            }`}
          >
            <h3 className="text-xl font-semibold">
              Flexible
            </h3>

            <p className="mt-2 text-slate-600">
              {timelineOptions.flexible}
            </p>

            <p className="mt-4 text-sm text-slate-500">
              Lower cost • Longer timeline
            </p>
          </button>

          <button
            onClick={() => setTimeline("recommended")}
            className={`rounded-3xl border p-6 text-left transition ${
              timeline === "recommended"
                ? "border-slate-900 bg-slate-50"
                : "border-slate-200"
            }`}
          >
            <h3 className="text-xl font-semibold">
              Recommended
            </h3>

            <p className="mt-2 text-slate-600">
              {timelineOptions.recommended}
            </p>

            <p className="mt-4 text-sm text-slate-500">
              Best balance of speed and investment
            </p>
          </button>

          <button
            onClick={() => setTimeline("priority")}
            className={`rounded-3xl border p-6 text-left transition ${
              timeline === "priority"
                ? "border-slate-900 bg-slate-50"
                : "border-slate-200"
            }`}
          >
            <h3 className="text-xl font-semibold">
              Priority
            </h3>

            <p className="mt-2 text-slate-600">
              {timelineOptions.priority}
            </p>

            <p className="mt-4 text-sm text-slate-500">
              Faster delivery • Higher investment
            </p>
          </button>
        </div>

        <div className="mt-10 rounded-2xl border border-slate-200 p-5">
          <p className="text-sm text-slate-500">
            Project Summary
          </p>

          <div className="mt-4 space-y-2">
            <p>Service: {service}</p>
            <p>Industry: {industry}</p>
            <p>Additional Features: {selectedFeatures.length}</p>
            <p>Pages: {pages}</p>
            <p>Timeline: {timeline}</p>
          </div>
        </div>

        <div className="mt-10 flex justify-between">
          <button
            onClick={() => setStep(4)}
            className="rounded-full border border-slate-300 px-6 py-3"
          >
            ← Back
          </button>

          <button
            onClick={() => setStep(6)}
            className="
rounded-full
bg-slate-900
px-6
py-3
text-white
transition-all
duration-300
hover:scale-105
hover:shadow-xl
"
          >
            Generate Estimate →
          </button>
        </div>
      </>
    )}
    {/*App Step 6 */}
    {step === 6 && isAppFlow && (
  <>
    <h2 className="text-2xl font-semibold text-slate-900">
      App Project Estimate
    </h2>

    <p className="mt-2 text-slate-600">
      Estimated range based on selected features,
      screens and complexity.
    </p>

    <div className="mt-8 rounded-[32px] border border-blue-200 bg-blue-50 p-10 text-center">

      <p className="text-sm font-medium uppercase tracking-[0.2em] text-blue-600">
        Estimated Starting Price
      </p>

      <p className="mt-4 text-5xl font-semibold text-slate-900">
        From ₹{(Math.ceil(appEstimate.low / 1000) * 1000 - 1).toLocaleString("en-IN")}
      </p>

      <p className="mt-5 text-lg font-medium text-slate-700">
        Tailored after a free consultation
      </p>

      <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-600">
        This represents the starting investment for your application.
        The final quotation depends on features, integrations,
        backend infrastructure, app store requirements and overall project scope.
      </p>

    </div>

    <div className="mt-8 grid gap-4 md:grid-cols-3">

      <div className="rounded-2xl border p-5">
        <p className="text-sm text-slate-500">
          Screens
        </p>

        <p className="mt-2 text-2xl font-semibold">
          {screens}
        </p>
      </div>

      <div className="rounded-2xl border p-5">
        <p className="text-sm text-slate-500">
          Additional Features
        </p>

        <p className="mt-2 text-2xl font-semibold">
          {selectedFeatures.length}
        </p>
      </div>

      <div className="rounded-2xl border p-5">
        <p className="text-sm text-slate-500">
          Timeline
        </p>

        <p className="mt-2 text-2xl font-semibold">
          {Math.max(
            4,
            Math.ceil(screens / 2)
          )} Weeks
        </p>
      </div>

    </div>

    <div className="mt-10 flex items-center justify-between">

      <button
        onClick={() => setStep(5)}
        className="rounded-full border px-6 py-3"
      >
        ← Back
      </button>

      <a
          href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
        `Hi Teknas Digital Solutions,
        I would like to discuss a mobile application project.
        ━━━━━━━━━━━━━━
        *Industry:* ${industry}
        *Screens:* ${screens}
        *Additional Features:* ${selectedFeatures.length}
        *Timeline:*
        ${Math.max(
          4,
          Math.ceil(screens / 2)
        )} Weeks
        *Estimated Budget:*
        ₹${appEstimate.low.toLocaleString()}
        ━━━━━━━━━━━━━━
        *Selected Features:*
        ${getSelectedAppFeatureTitles()}
        ━━━━━━━━━━━━━━
        Please contact me regarding this project.`
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="
rounded-full
bg-slate-900
px-6
py-3
text-white
transition-all
duration-300
hover:scale-105
hover:shadow-xl
"
        >
          WhatsApp Us →
        </a>
    </div>
  </>
)}
    {/* STEP 6 */}
    {step === 6 && !isAppFlow &&(
      <>
        <div className="text-center">
          <h2 className="text-4xl font-semibold text-slate-900">
            Estimated Investment
          </h2>

          <p className="mt-4 text-slate-600">
            Based on your selections, your project is likely to fall within the
            following range.
          </p>
        </div>

        <div className="mt-12 rounded-[32px] border border-blue-200 bg-blue-50 p-10 text-center">

        <p className="text-sm font-medium uppercase tracking-[0.2em] text-blue-600">
          Estimated Starting Price
        </p>

        <p className="mt-4 text-5xl font-semibold text-slate-900">
          From ₹{(Math.ceil(estimate.min / 1000) * 1000 - 1).toLocaleString("en-IN")}
        </p>

        <p className="mt-5 text-lg font-medium text-slate-700">
          Tailored after a free consultation
        </p>

        <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-600">
          Every project is unique. After understanding your goals, we'll provide a
          detailed proposal with a transparent timeline and fixed quotation.
        </p>

      </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 p-6">
            <h3 className="text-xl font-semibold">
              Project Summary
            </h3>

            <div className="mt-6 space-y-3 text-slate-600">
              <p>✓ Service: {service}</p>
              <p>✓ Industry: {industry}</p>
              <p>✓ Pages: {pages}</p>
              <p>
                ✓ Additional Features: {selectedFeatures.length}
              </p>
              <p>✓ Timeline: {timeline}</p>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 p-6">
            <h3 className="text-xl font-semibold">
              Need Something Different?
            </h3>

            <p className="mt-4 text-slate-600 leading-7">
              If this estimate doesn't perfectly match your budget,
              we can adjust features, scope and timelines to create
              a solution that works for your business.
            </p>
          </div>
        </div>

        <div className="mt-12 rounded-[32px] border border-slate-200 p-10 text-center">
          <h3 className="text-2xl font-semibold">
            Ready To Discuss Your Project?
          </h3>

          <p className="mt-4 text-slate-600">
            Schedule a consultation and receive a more accurate proposal.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <a
  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
          `Hi Teknas Digital Solutions,

          I would like to discuss a project.
          ━━━━━━━━━━━━━━
          *Service:* ${service}
          *Industry:* ${industry}
          *Pages:* ${pages}
          *Additional Features:* ${selectedFeatures.length}
          *Estimated Budget:*
          ₹{(Math.ceil(estimate.min / 1000) * 1000 - 1).toLocaleString("en-IN")}
          ━━━━━━━━━━━━━━
          *Selected Features:*
          ${getSelectedFeatureTitles()}
          ━━━━━━━━━━━━━━
          Please contact me regarding this project.`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-slate-900 px-8 py-3 text-white"
          >
            WhatsApp Us
          </a>

            <a
              href="/contact"
              className="rounded-full border border-slate-300 px-8 py-3"
            >
              Contact Us
            </a>
          </div>
        </div>

        <div className="mt-10 flex justify-between">
          <button
            onClick={() => setStep(5)}
            className="rounded-full border border-slate-300 px-6 py-3"
          >
            ← Back
          </button>

          <button
            onClick={() => window.location.reload()}
            className="rounded-full bg-slate-900 px-6 py-3 text-white"
          >
            Start New Estimate
          </button>
        </div>
      </>
    )}
    {step === 99 && (
  <>
    <h2 className="text-2xl font-semibold text-slate-900">
      Free Project Consultation
    </h2>

    <p className="mt-3 max-w-2xl text-slate-600">
      Every redesign and custom software project is unique.
      We'd prefer understanding your requirements before
      providing estimates.
    </p>

    <div className="mt-10 rounded-3xl border border-slate-200 p-8">

      <h3 className="text-lg font-semibold">
        What happens next?
      </h3>

      <ul className="mt-5 space-y-3 text-slate-600">
        <li>✓ Quick requirement discussion</li>
        <li>✓ Project feasibility review</li>
        <li>✓ Suggested solution</li>
        <li>✓ Timeline estimation</li>
        <li>✓ Detailed quotation</li>
      </ul>

    </div>

    <div className="mt-10 flex items-center justify-between">

      <button
        onClick={() => {
          setService("");
          setStep(1);
        }}
        className="rounded-full border border-slate-300 px-6 py-3"
      >
        ← Back
      </button>

      <a
        href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
          service === "redesign"
            ? `Hi Teknas Digital Solutions, I would like a redesign of my existing website.

Business Name:
Website URL:
What would you like improved?`
            : `Hi Teknas Digital Solutions, I would like a custom software solution.

Business Type:
Requirements:
Approximate Users:`
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-full bg-slate-900 px-6 py-3 text-white"
      >
        Chat on WhatsApp →
      </a>

    </div>
  </>
)}
</main>

);
}
