type MegaMenuProps = {
    type: string
}

export default function MegaMenu({ type }: MegaMenuProps) {
    return (
        <div>
            <h2 className="text-xl font-bold capitalize">
                {type}
            </h2>
        </div>
    )
}
