import { Plus, Minus } from 'lucide-react'

const VARIANTS = {
    default: {
        wrapper: 'flex items-center justify-between border border-gray-400 rounded-xl px-4 py-3 w-30',
        button: 'text-lg hover:text-gray-500 transition-colors cursor-pointer',
        value: 'text-md font-medium',
    },
    compact: {
        wrapper: 'flex items-center border border-gray-300 rounded-lg overflow-hidden w-fit',
        button: 'px-2 py-1 hover:bg-gray-100 transition-colors',
        value: 'w-8 text-center font-semibold text-sm border-x border-gray-200 py-1',
    },
}

export function QuantitySelector({ quantity, onIncrease, onDecrease, variant = 'default' }) {

    const styles = VARIANTS[variant]
    const isCompact = variant === 'compact'

    return (
        <div className={styles.wrapper}>
            <button onClick={onDecrease} className={styles.button}>
                {isCompact ? <Minus size={14} /> : '-'}
            </button>
            <span className={styles.value}>{quantity}</span>
            <button onClick={onIncrease} className={styles.button}>
                {isCompact ? <Plus size={14} /> : '+'}
            </button>
        </div>
    )
}
