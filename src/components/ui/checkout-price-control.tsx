import * as React from "react";
import { MinusIcon, PlusIcon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

type VolumeControlProps = {
  className?: string;
  initialValue?: number;
  min?: number;
  max?: number;
  onChange?: (value: number) => void;
};

const numberVariants = {
  initial: { opacity: 0, y: 20 },
  animate: (opacity: number) => ({ opacity, y: 0 }),
  exit: { opacity: 0, y: -20 },
  transition: { duration: 0.2 },
};

const buttonVariants = {
  tap: { scale: 0.9 },
  hover: { scale: 1.05 },
};

const VolumeControl = React.forwardRef<HTMLDivElement, VolumeControlProps>((props, ref) => {
  const { className, initialValue = 3, min = 0, max = 6, onChange, ...restProps } = props;

  const [volume, setVolume] = React.useState(initialValue);

  const decreaseVolume = () => {
    if (volume > min) {
      const newValue = volume - 1;
      setVolume(newValue);
      onChange?.(newValue);
    }
  };

  const increaseVolume = () => {
    if (volume < max) {
      const newValue = volume + 1;
      setVolume(newValue);
      onChange?.(newValue);
    }
  };

  if (volume === max) {
    toast.info("You can only purchase a maximum of 6 products.");
  }

  const dynamicOpacity = volume === min ? 0.3 : 0.4 + (volume / max) * 0.6;

  return (
    <div ref={ref} className={cn("inline-flex items-center", className)} role="group" aria-labelledby="volume-control" {...restProps}>
      <span id="volume-control" className="sr-only">
        Volume Control
      </span>

      <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
        <Button className="rounded-full" variant="outline" size="icon" aria-label="Decrease volume" onClick={decreaseVolume} disabled={volume === min} type="button">
          <MinusIcon size={16} aria-hidden="true" />
        </Button>
      </motion.div>

      <div className="flex items-center px-4 text-sm font-medium" aria-live="polite">
        <div className="flex items-center">
          <div className="relative h-6 w-4 overflow-hidden">
            <AnimatePresence mode="popLayout" initial={false}>
              <motion.span
                key={volume}
                className="absolute inset-0 flex items-center justify-center"
                custom={dynamicOpacity}
                variants={numberVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                aria-label={`Current volume is ${volume}`}
              >
                {volume}
              </motion.span>
            </AnimatePresence>
          </div>
        </div>
      </div>

      <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
        <Button className="rounded-full" variant="outline" size="icon" aria-label="Increase volume" onClick={increaseVolume} disabled={volume === max} type="button">
          <PlusIcon size={16} aria-hidden="true" />
        </Button>
      </motion.div>
    </div>
  );
});

VolumeControl.displayName = "VolumeControl";

export { VolumeControl };
