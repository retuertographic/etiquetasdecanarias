import Link from "next/link";
import { cn } from "@/lib/utils";
import { SITE } from "./data";
import { BUTTON, INPUT, Section } from "./ui";

const CARD = "mx-auto my-6 max-w-[500px] bg-white p-12 shadow-[0_5px_15px_rgba(0,0,0,0.15)] max-[600px]:p-6";

/**
 * "Mi cuenta" login. Accounts live in the WordPress shop, so the form signs in
 * through the live site's standard wp-login.php and lands on its account page.
 */
export function LoginForm() {
  return (
    <Section>
      <form action={`${SITE}/wp-login.php`} method="post" className={CARD}>
        <p className="mb-6">
          <label htmlFor="username" className="mb-[4.8px] block font-bold">
            Nombre de usuario o correo electrónico&nbsp;<span className="text-[#e53935]">*</span>
          </label>
          <input id="username" name="log" type="text" required autoComplete="username" className={cn(INPUT, "h-[45px]")} />
        </p>
        <p className="mb-6">
          <label htmlFor="password" className="mb-[4.8px] block font-bold">
            Contraseña&nbsp;<span className="text-[#e53935]">*</span>
          </label>
          <input id="password" name="pwd" type="password" required autoComplete="current-password" className={cn(INPUT, "h-[45px]")} />
        </p>
        <input type="hidden" name="rememberme" value="forever" />
        <input type="hidden" name="redirect_to" value={`${SITE}/mi-cuenta/`} />
        <p className="mb-6">
          <button type="submit" className={BUTTON}>
            Acceso
          </button>
        </p>
        <p>
          <Link href="/mi-cuenta/lost-password/" className="hover:text-[#FF6900]">
            ¿Olvidaste la contraseña?
          </Link>
        </p>
      </form>
    </Section>
  );
}

/** WooCommerce lost-password form, submitted to the live site's wp-login.php. */
export function LostPasswordForm() {
  return (
    <Section>
      <form action={`${SITE}/wp-login.php?action=lostpassword`} method="post" className={CARD}>
        <p className="mb-6">¿Perdiste tu contraseña? Por favor, introduce tu nombre de usuario o correo electrónico. Recibirás un enlace para crear una contraseña nueva por correo electrónico.</p>
        <p className="mb-6">
          <label htmlFor="user_login" className="mb-[4.8px] block font-bold">
            Nombre de usuario o correo electrónico&nbsp;<span className="text-[#e53935]">*</span>
          </label>
          <input id="user_login" name="user_login" type="text" required autoComplete="username" className={cn(INPUT, "h-[45px]")} />
        </p>
        <input type="hidden" name="redirect_to" value={`${SITE}/mi-cuenta/?reset-link-sent=true`} />
        <button type="submit" className={BUTTON}>
          Restablecer contraseña
        </button>
      </form>
    </Section>
  );
}
