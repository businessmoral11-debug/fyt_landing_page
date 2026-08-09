import { describe, it, expect } from "vitest";
import {
  TESTIMONIAL_REVIEWS,
  TESTIMONIAL_VIDEOS,
  TESTIMONIAL_PAGES,
  TESTIMONIAL_FLAT_ITEMS,
  buildTestimonialPages,
  type TestimonialReview,
  type TestimonialVideo,
} from "./testimonials";
import { VIDEO_URLS } from "./liveSiteContent";

describe("TESTIMONIAL_REVIEWS", () => {
  it("has all 20 real TrustIndex reviews", () => {
    expect(TESTIMONIAL_REVIEWS).toHaveLength(20);
  });

  it("has every rating as an integer between 1 and 5", () => {
    for (const r of TESTIMONIAL_REVIEWS) {
      expect(Number.isInteger(r.rating)).toBe(true);
      expect(r.rating).toBeGreaterThanOrEqual(1);
      expect(r.rating).toBeLessThanOrEqual(5);
    }
  });

  it("matches the first review exactly", () => {
    expect(TESTIMONIAL_REVIEWS[0]).toEqual({
      name: "Sakil Shaikh",
      initials: "SS",
      color: "#3b82f6",
      rating: 5,
      date: "2026-07-26",
      title: "Best firm",
      quote: "The best propfirm ever I have trade with",
    });
  });

  it("matches the last review exactly", () => {
    expect(TESTIMONIAL_REVIEWS[19]).toEqual({
      name: "Khairul Hafiz",
      initials: "KH",
      color: "linear-gradient(119deg, #60a5fa 0%, #3b82f6 73%)",
      rating: 5,
      date: "2026-07-25",
      title: "Traded CPI news without issues",
      quote: "Executed my order right during CPI data release. News trading is allowed on challenges, so my order filled clean without compliance warnings. Made my monthly goal fast.",
    });
  });

  it("alternates solid and gradient avatar colors", () => {
    for (let i = 0; i < TESTIMONIAL_REVIEWS.length; i++) {
      expect(TESTIMONIAL_REVIEWS[i].color).toBe(
        i % 2 === 0 ? "#3b82f6" : "linear-gradient(119deg, #60a5fa 0%, #3b82f6 73%)",
      );
    }
  });
});

describe("TESTIMONIAL_VIDEOS", () => {
  it("has all 16 real video testimonials", () => {
    expect(TESTIMONIAL_VIDEOS).toHaveLength(16);
  });

  it("matches the first video exactly", () => {
    expect(TESTIMONIAL_VIDEOS[0]).toEqual({
      name: "Nicolas",
      caption: "This funding experience completely changed the way I trade and scale accounts.",
      videoUrl: "https://fundingyourtrades.com/wp-content/uploads/2026/06/Nicholas-Video.mp4",
      posterUrl: "https://fundingyourtrades.com/wp-content/uploads/2026/06/6181506534194483764.jpg",
    });
  });

  it("matches the last video exactly", () => {
    expect(TESTIMONIAL_VIDEOS[15]).toEqual({
      name: "Abigail",
      caption: "Joining this program was the best trading decision I've ever made.",
      videoUrl: "https://fundingyourtrades.com/wp-content/uploads/2026/03/Rebecca-final-interview.mp4",
      posterUrl: "https://fundingyourtrades.com/wp-content/uploads/2026/03/IMG_8135.jpg",
    });
  });

  it("gives the two FYT-7/FYT-8 videos their own distinct, thumbnail-accurate names (not a shared placeholder)", () => {
    const katherine = TESTIMONIAL_VIDEOS.find((v) => v.videoUrl.endsWith("FYT-7.mp4"));
    const bharath = TESTIMONIAL_VIDEOS.find((v) => v.videoUrl.endsWith("FYT-8.mp4"));
    expect(katherine?.name).toBe("Katherine");
    expect(bharath?.name).toBe("Bharath");
    expect(katherine?.videoUrl).not.toBe(bharath?.videoUrl);
  });

  it("has no name collisions across the 16 videos (every displayed name is unique)", () => {
    const names = TESTIMONIAL_VIDEOS.map((v) => v.name);
    expect(new Set(names).size).toBe(names.length);
  });
});

describe("buildTestimonialPages", () => {
  it("alternates [review, review, video] / [video, review, review] rows until one list runs out, then fills remaining rows with only the leftover type", () => {
    const reviews: TestimonialReview[] = [1, 2, 3, 4, 5].map((n) => ({
      name: `R${n}`, initials: "RX", color: "#3b82f6", rating: 5, date: "2026-01-01", title: `t${n}`, quote: `q${n}`,
    }));
    const videos: TestimonialVideo[] = [1, 2].map((n) => ({
      name: `V${n}`, caption: `c${n}`, videoUrl: `u${n}`, posterUrl: `p${n}`,
    }));

    const pages = buildTestimonialPages(reviews, videos);

    expect(pages[0].topRow.map((s) => (s.kind === "review" ? s.review.name : s.video.name))).toEqual(["R1", "R2", "V1"]);
    expect(pages[0].bottomRow.map((s) => (s.kind === "review" ? s.review.name : s.video.name))).toEqual(["V2", "R3", "R4"]);
    expect(pages[1].topRow.map((s) => (s.kind === "review" ? s.review.name : s.video.name))).toEqual(["R5"]);
    expect(pages[1].bottomRow).toEqual([]);
    expect(pages).toHaveLength(2);
  });

  it("produces exactly 6 pages for the real 20-review/16-video dataset, using every item exactly once", () => {
    const pages = buildTestimonialPages(TESTIMONIAL_REVIEWS, TESTIMONIAL_VIDEOS);
    expect(pages).toHaveLength(6);

    const allSlides = pages.flatMap((p) => [...p.topRow, ...p.bottomRow]);
    const reviewNames = allSlides.filter((s) => s.kind === "review").map((s) => (s as { kind: "review"; review: TestimonialReview }).review.name);
    const videoNames = allSlides.filter((s) => s.kind === "video").map((s) => (s as { kind: "video"; video: TestimonialVideo }).video.videoUrl);

    expect(reviewNames).toHaveLength(20);
    expect(videoNames).toHaveLength(16);
    expect(new Set(reviewNames).size).toBe(20);
    expect(new Set(videoNames).size).toBe(16);
  });

  it("keeps the first 5 pages in the mixed [R,R,V]/[V,R,R] pattern and the 6th page as video-only rows", () => {
    const pages = buildTestimonialPages(TESTIMONIAL_REVIEWS, TESTIMONIAL_VIDEOS);
    for (let i = 0; i < 5; i++) {
      expect(pages[i].topRow.map((s) => s.kind)).toEqual(["review", "review", "video"]);
      expect(pages[i].bottomRow.map((s) => s.kind)).toEqual(["video", "review", "review"]);
    }
    expect(pages[5].topRow.map((s) => s.kind)).toEqual(["video", "video", "video"]);
    expect(pages[5].bottomRow.map((s) => s.kind)).toEqual(["video", "video", "video"]);
  });

  it("ensures every tail row is homogeneous (one kind only) even with odd review count", () => {
    const reviews: TestimonialReview[] = [1, 2, 3, 4, 5, 6, 7].map((n) => ({
      name: `R${n}`, initials: "RX", color: "#3b82f6", rating: 5, date: "2026-01-01", title: `t${n}`, quote: `q${n}`,
    }));
    const videos: TestimonialVideo[] = Array.from({ length: 10 }, (_, n) => ({
      name: `V${n + 1}`, caption: `c${n + 1}`, videoUrl: `u${n + 1}`, posterUrl: `p${n + 1}`,
    }));

    const pages = buildTestimonialPages(reviews, videos);

    const numMainLoopRows = Math.min(Math.floor(reviews.length / 2), videos.length);
    const allRows = pages.flatMap((p) => [p.topRow, p.bottomRow]).filter((row) => row.length > 0);
    const tailRows = allRows.slice(numMainLoopRows);

    for (const row of tailRows) {
      const kinds = row.map((s) => s.kind);
      const uniqueKinds = new Set(kinds);
      expect(uniqueKinds.size).toBe(1);
    }
  });

  it("exports TESTIMONIAL_PAGES as the precomputed result for the real dataset", () => {
    expect(TESTIMONIAL_PAGES).toEqual(buildTestimonialPages(TESTIMONIAL_REVIEWS, TESTIMONIAL_VIDEOS));
  });
});

describe("TESTIMONIAL_VIDEOS video URLs stay in sync with liveSiteContent's VIDEO_URLS", () => {
  it("every videoUrl exists in VIDEO_URLS.testimonials or VIDEO_URLS.misc", () => {
    const knownUrls = new Set([
      ...Object.values(VIDEO_URLS.testimonials),
      ...Object.values(VIDEO_URLS.misc),
    ]);
    for (const video of TESTIMONIAL_VIDEOS) {
      expect(knownUrls.has(video.videoUrl)).toBe(true);
    }
  });
});

describe("TESTIMONIAL_FLAT_ITEMS", () => {
  it("has one entry per review plus one entry per video, no drops or duplicates", () => {
    expect(TESTIMONIAL_FLAT_ITEMS).toHaveLength(TESTIMONIAL_REVIEWS.length + TESTIMONIAL_VIDEOS.length);
  });

  it("preserves TESTIMONIAL_PAGES' row order exactly (topRow then bottomRow, page by page)", () => {
    const expected = TESTIMONIAL_PAGES.flatMap((page) => [...page.topRow, ...page.bottomRow]);
    expect(TESTIMONIAL_FLAT_ITEMS).toEqual(expected);
  });
});
