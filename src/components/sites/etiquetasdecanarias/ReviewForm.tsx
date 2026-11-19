"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { SITE } from "./data";
import { BUTTON, INPUT } from "./ui";

const RATINGS = ["Muy pobre", "No está tan mal", "Normal", "Bueno", "Perfecto"];

function Star({ filled }: { filled: boolean }) {
  return (
    <svg viewBox="0 0 24 24" className="h-8 w-8" aria-hidden="true">
      <path
        d="M12 2.5l2.9 6.1 6.6.8-4.9 4.6 1.3 6.6L12 17.3l-5.9 3.3 1.3-6.6-4.9-4.6 6.6-.8z"
        fill={filled ? "#FF6900" : "#4a4a4a"}
      />
    </svg>
  );
}

/**
 * WooCommerce review form. Like the source, it posts to the live site's
 * wp-comments-post.php for the product's WordPress post ID.
 */
export function ReviewForm({ productTitle, wpId, productPath }: { productTitle: string; wpId: number; productPath: string }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [error, setError] = useState("");

  return (
    <div className="bg-white p-8 shadow-[0_5px_15px_rgba(0,0,0,0.15)] max-[600px]:p-5">
      <span className="mb-4 block">Sé el primero en valorar “{productTitle}”</span>
      <form
        action={`${SITE}/wp-comments-post.php`}
        method="post"
        onSubmit={(e) => {
          if (!rating) {
            e.preventDefault();
            setError("Por favor elige una puntuación");
          }
        }}
      >
        <p className="mb-6">
          Tu dirección de correo electrónico no será publicada. Los campos obligatorios están marcados con <span>*</span>
        </p>
        <div className="mb-6">
          <label className="block leading-[19px]">Tu puntuación&nbsp;*</label>
          <div className="mt-1 flex" role="radiogroup" aria-label="Tu puntuación" onMouseLeave={() => setHover(0)}>
            {RATINGS.map((label, i) => (
              <button
                key={label}
                type="button"
                role="radio"
                aria-checked={rating === i + 1}
                aria-label={`${i + 1} de 5 — ${label}`}
                onMouseEnter={() => setHover(i + 1)}
                onClick={() => {
                  setRating(i + 1);
                  setError("");
                }}
              >
                <Star filled={(hover || rating) > i} />
              </button>
            ))}
          </div>
          <input type="hidden" name="rating" value={rating || ""} />
          {error && <p className="mt-1 text-[14px] text-[#e53935]">{error}</p>}
        </div>
        <p className="mb-6">
          <label htmlFor="review-comment" className="block">
            Tu valoración&nbsp;*
          </label>
          <textarea id="review-comment" name="comment" required className={cn(INPUT, "block h-32 resize-y py-3")} />
        </p>
        <p className="mb-6">
          <label htmlFor="review-author" className="block">
            Nombre&nbsp;*
          </label>
          <input id="review-author" name="author" type="text" required autoComplete="name" className={cn(INPUT, "h-[45px]")} />
        </p>
        <p className="mb-6">
          <label htmlFor="review-email" className="block">
            Correo electrónico&nbsp;*
          </label>
          <input id="review-email" name="email" type="email" required autoComplete="email" className={cn(INPUT, "h-[45px]")} />
        </p>
        <p className="mb-6 flex items-center gap-3">
          <input id="review-cookies" name="wp-comment-cookies-consent" type="checkbox" value="yes" className="h-5 w-5 accent-[#49a7d1]" />
          <label htmlFor="review-cookies">Guarda mi nombre, correo electrónico y web en este navegador para la próxima vez que comente.</label>
        </p>
        <input type="hidden" name="comment_post_ID" value={wpId} />
        <input type="hidden" name="comment_parent" value="0" />
        <input type="hidden" name="redirect_to" value={`${SITE}${productPath}`} />
        <button type="submit" className={BUTTON}>
          Enviar
        </button>
      </form>
    </div>
  );
}
